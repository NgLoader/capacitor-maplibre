import { Capacitor, PluginListenerHandle } from '@capacitor/core';
import { AnimationOptions, EaseToOptions, FitBoundsOptions, FlyToOptions, LayerSpecification, LngLatBounds, LngLatBoundsLike, QueryRenderedFeaturesOptions, QuerySourceFeatureOptions, SourceSpecification, StyleSpecification } from 'maplibre-gl';
import { Subject } from 'rxjs';
import { CapacitorMaplibre, MapLibreSupportAndroid, MapLibreSupportIos } from './implementation';
import { LngLat, Point } from './models/lnglat.type';
import { MapListenerCallback, MapListenerType } from './types/map-listener.callback';
import { MapReadyCallback } from './types/map-ready.callback';
import { MapCreateOptions, MapEvent, MapUpdateOptions } from './types/map.type';
import { MapMarkerImageOptions, MapMarkerTypeOptions } from './types/marker.type';
import { UserLocationEvent } from './types/user-location.type';

export class MapLibreMap {

  private static async getElementBounds(element: HTMLElement): Promise<DOMRect> {
    return new Promise((resolve) => {
      let elementBounds = element.getBoundingClientRect();
      if (elementBounds.width == 0) {
        let retries = 0;
        const boundsInterval = setInterval(function () {
          if (elementBounds.width == 0 && retries < 30) {
            elementBounds = element.getBoundingClientRect();
            retries++;
          } else {
            if (retries == 30) {
              console.warn('Map size could not be determined');
            }
            clearInterval(boundsInterval);
            resolve(elementBounds);
          }
        }, 100);
      } else {
        resolve(elementBounds);
      }
    });
  }

  static async create(
    options: MapCreateOptions,
    callback?: MapListenerCallback<MapReadyCallback>
  ): Promise<MapLibreMap> {
    const map = new MapLibreMap(options.mapId);

    if (!options.element) {
      throw new Error('Element is not defined!');
    }
    map.element = options.element;
    map.element.dataset['mapId'] = options.mapId;

    const elementBounds = await MapLibreMap.getElementBounds(map.element);
    options.elementWidth = Math.trunc(elementBounds.width);
    options.elementHeight = Math.trunc(elementBounds.height);
    options.elementX = Math.trunc(elementBounds.x);
    options.elementY = Math.trunc(elementBounds.y);
    options.devicePixelRatio = window.devicePixelRatio;

    // android support
    if (Capacitor.getPlatform() === 'android' && MapLibreSupportAndroid) {
      map.enableScrolling();
    }

    // setup native support
    if (Capacitor.isNativePlatform() &&
      ((Capacitor.getPlatform() === 'android' && MapLibreSupportAndroid) ||
        (Capacitor.getPlatform() === 'ios' && MapLibreSupportIos))) {
      // don't send element as native! (app crash)
      (options.element as any) = {};

      const getMapBounds = () => {
        const bounds = map.element?.getBoundingClientRect() ?? ({} as DOMRect);
        return {
          mapId: map.id,
          data: {
            width: bounds.width,
            height: bounds.height,
            x: bounds.x,
            y: bounds.y
          }
        };
      };

      const onDisplay = () => CapacitorMaplibre.onDisplay(getMapBounds());
      const onResize = () => CapacitorMaplibre.onResize(getMapBounds());

      // ios support
      const ionicElement = map.element.closest('.ion-page');
      if (Capacitor.getPlatform() === 'ios' && ionicElement) {
        ionicElement.addEventListener('ionViewWillEnter', () => setTimeout(onDisplay.bind(this), 100));
        ionicElement.addEventListener('ionViewDidEnter', () => setTimeout(onDisplay.bind(this), 100));
      }

      // detect size changes
      const lastState = {
        width: elementBounds.width,
        height: elementBounds.height,
        isHidden: false
      };
      map.resizeObserver$ = new ResizeObserver(() => {
        if (map.element == undefined) {
          return;
        }

        const bounds = map.element.getBoundingClientRect();
        const isHidden = bounds.width === 0 && bounds.height === 0;
        if (!isHidden) {
          if (lastState.isHidden) {
            // ios support
            if (Capacitor.getPlatform() === 'ios' && !ionicElement) {
              onDisplay();
            }
          } else if (lastState.width !== bounds.width || lastState.height !== bounds.height) { // check for resize changes
            onResize();
          }
        }

        // update values
        lastState.width = bounds.width;
        lastState.height = bounds.height;
        lastState.isHidden = isHidden;
      });
      map.resizeObserver$.observe(map.element);
    }

    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          await CapacitorMaplibre.createMap({
            ...options,
            style: JSON.stringify(options.style)
          });
          resolve(undefined);
        } catch (error) {
          reject(error);
        }
      }, 200);
    });

    if (callback) {
      const mapReadyListener = await CapacitorMaplibre.addListener('load', (data: MapReadyCallback) => {
        if (data.mapId === map.id) {
          callback(data);
          mapReadyListener.remove();
        }
      });
    }

    return map;
  }

  private readonly id: string;
  private element?: HTMLElement;
  private resizeObserver$?: ResizeObserver;

  private listeners = new Map<string, EventListener<any>>();

  private constructor(id: string) {
    this.id = id;
  }

  private callNative<TData, TResult>(result: (call: MapEvent<TData>) => TResult, data: TData) {
    return result({
      mapId: this.id,
      data: data
    });
  }

  private enableScrolling() {
    const ionContent = document.getElementsByTagName('ion-content');

    for (const element of Array.from(ionContent)) {
      (element as any).scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => setTimeout(this.updateMapBounds, 500));
    } else {
      window.addEventListener('orientationchange', () => setTimeout(this.updateMapBounds, 500));
    }
  }

  private disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => setTimeout(this.updateMapBounds, 1000));
    } else {
      window.removeEventListener('orientationchange', () => setTimeout(this.updateMapBounds, 1000));
    }
  }

  private handleScrollEvent = () => this.updateMapBounds();

  private updateMapBounds() {
    if (this.element) {
      const bounds = this.element.getBoundingClientRect();
      this.callNative(CapacitorMaplibre.onScroll, {
        width: bounds.width,
        height: bounds.height,
        x: bounds.x,
        y: bounds.y
      });
    }
  }

  updateMap(options: MapUpdateOptions) {
    return this.callNative(CapacitorMaplibre.updateMap, options);
  }

  setStyle(options: StyleSpecification | string) {
    return this.callNative(CapacitorMaplibre.setStyle, JSON.stringify(options));
  }

  moveCamera(options: FlyToOptions) {
    return this.callNative(CapacitorMaplibre.moveCamera, options);
  }

  zoomTo(zoom: number, options?: AnimationOptions) {
    return this.callNative(CapacitorMaplibre.zoomTo, {
      zoom,
      options
    });
  }

  easeTo(options: EaseToOptions) {
    return this.callNative(CapacitorMaplibre.easeTo, options);
  }

  queryRenderedFeatures(point: Point, options?: QueryRenderedFeaturesOptions) {
    return this.callNative(CapacitorMaplibre.queryRenderedFeatures, {
      point,
      options
    });
  }

  querySourceFeatures(sourceId: string, options?: QuerySourceFeatureOptions) {
    return this.callNative(CapacitorMaplibre.querySourceFeatures, {
      sourceId,
      options
    });
  }

  resetNorthPitch(options: AnimationOptions) {
    return this.callNative(CapacitorMaplibre.resetNorthPitch, options);
  }

  fitBounds(bounds: LngLatBoundsLike, options?: FitBoundsOptions) {
    return this.callNative(CapacitorMaplibre.fitBounds, {
      bounds,
      options
    });
  }

  getBounds(): Promise<LngLatBounds> {
    return this.callNative(CapacitorMaplibre.getBounds, undefined);
  }

  addLayer(options: LayerSpecification, beforeLayerId?: string) {
    return this.callNative(CapacitorMaplibre.addLayer, {
      layer: options,
      beforeLayerId
    });
  }

  getLayer(options: string): Promise<LayerSpecification | undefined> {
    return this.callNative(CapacitorMaplibre.getLayer, options);
  }

  getLayersOrder(options: void): Promise<LayerSpecification[]> {
    return this.callNative(CapacitorMaplibre.getLayersOrder, options);
  }

  moveLayer(layerId: string, beforeLayerId: string) {
    return this.callNative(CapacitorMaplibre.moveLayer, {
      layerId,
      beforeLayerId
    });
  }

  removeLayer(layerId: string) {
    return this.callNative(CapacitorMaplibre.removeLayer, {
      layerId
    });
  }

  addSource(sourceId: string, source: SourceSpecification) {
    return this.callNative(CapacitorMaplibre.addSource, {
      sourceId,
      source
    });
  }

  getSource(sourceId: string) {
    return this.callNative(CapacitorMaplibre.getSource, sourceId);
  }

  updateSource(sourceId: string, data: string | GeoJSON.GeoJSON) {
    return this.callNative(CapacitorMaplibre.updateSource, {
      sourceId,
      data
    });
  }

  removeSource(sourceId: string) {
    return this.callNative(CapacitorMaplibre.removeSource, {
      sourceId
    });
  }

  setProperty(layerId: string, layer?: Record<string, any>, paint?: Record<string, any>) {
    return this.callNative(CapacitorMaplibre.setProperty, {
      layerId,
      layer,
      paint
    });
  }

  setLayerProperty(layerId: string, name: string, value: any) {
    return this.callNative(CapacitorMaplibre.setProperty, {
      layerId,
      layer: {
        [name]: value
      }
    });
  }

  setPaintProperty(layerId: string, name: string, value: any) {
    return this.callNative(CapacitorMaplibre.setProperty, {
      layerId,
      paint: {
        [name]: value
      }
    });
  }

  getLayerProperty(layerId: string, name: string) {
    return this.callNative(CapacitorMaplibre.getLayerProperty, {
      layerId,
      name
    });
  }

  getPaintProperty(layerId: string, name: string) {
    return this.callNative(CapacitorMaplibre.getPaintProperty, {
      layerId,
      name
    });
  }

  addMarker(position: LngLat, options: MapMarkerImageOptions | MapMarkerTypeOptions) {
    return this.callNative(CapacitorMaplibre.addMarker, {
      position,
      options
    });
  }

  updateMarker(markerId: string, position?: LngLat, options?: MapMarkerImageOptions | MapMarkerTypeOptions) {
    return this.callNative(CapacitorMaplibre.updateMarker, {
      markerId,
      position,
      options
    });
  }

  removeMarker(markerId: string) {
    return this.callNative(CapacitorMaplibre.removeMarker, markerId);
  }

  showUserLocation(options: UserLocationEvent) {
    return this.callNative(CapacitorMaplibre.showUserLocation, options);
  }

  updateUserLocation(options: UserLocationEvent) {
    return this.callNative(CapacitorMaplibre.updateUserLocation, options);
  }

  hideUserLocation(options: void) {
    return this.callNative(CapacitorMaplibre.hideUserLocation, options);
  }

  async getListener<T extends keyof MapListenerType>(name: T) {
    let listener: EventListener<MapListenerType[T]> | undefined = this.listeners.get(name);
    if (listener == undefined) {
      listener = new EventListener<MapListenerType[T]>(this.id, name);
      this.listeners.set(name, listener);
      await listener.initialize();
    }

    return listener.subject$;
  }

  removeAllListener() {
    this.listeners.forEach(listener => listener.destroy());
    this.listeners.clear();
  }

  destroy() {
    this.removeAllListener();

    if (Capacitor.getPlatform() === 'android' && MapLibreSupportAndroid) {
      this.disableScrolling();
    }

    if (Capacitor.isNativePlatform()) {
      this.resizeObserver$?.disconnect();
    }

    this.callNative(CapacitorMaplibre.removeMap, undefined);
  }
}

class EventListener<T> {

  private readonly mapId: string;
  private readonly eventName: string;

  private listener?: PluginListenerHandle;
  readonly subject$: Subject<T> = new Subject<T>();

  constructor(mapId: string, eventName: string) {
    this.mapId = mapId;
    this.eventName = eventName;
  }

  private handle(data: T) {
    if ((data as any).mapId !== this.mapId) {
      return;
    }

    this.subject$.next(data);
  }

  async initialize() {
    this.listener = await CapacitorMaplibre.addListener(this.eventName, this.handle.bind(this));
  }

  async destroy() {
    await this.listener?.remove();

    this.subject$.complete();
    this.subject$.unsubscribe();
  }
}
