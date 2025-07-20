import { BleClient } from '@capacitor-community/bluetooth-le';
import { Capacitor, WebPlugin } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { AnimationOptions, EaseToOptions, FlyToOptions, Map as GLMap, LayerSpecification, LngLatBounds, MapGeoJSONFeature, MapMouseEvent, Marker, Source } from 'maplibre-gl';
import { BehaviorSubject, concatMap, interval, of, map as rxMap, Subject, switchMap, takeWhile, throttleTime } from 'rxjs';
import { CapacitorMaplibre } from './definitions';
import { Position } from './models/lnglat.type';
import { LayerAddOptions, LayerMoveOptions, LayerRemoveOptions, PropertyGetOptions, PropertySetOptions, QueryRenderedFeaturesData, QuerySourceFeatureData } from './types/layer.type';
import { MAP_EVENT_TYPES, MapClickEvent, MapListenerType, MapMoveEvent } from './types/map-listener.callback';
import { MapCreateOptions, MapEvent, MapFitBoundsOptions, MapUpdateOptions, ZoomToOptions } from './types/map.type';
import { MapMarkerAddOptions, MapMarkerUpdateOptions } from './types/marker.type';
import { SourceAddOptions, SourceRemoveOptions, SourceUpdateOptions } from './types/source.type';
import { UserLocationAutoRefreshOptions, UserLocationDirectionOptions, UserLocationEvent, UserLocationPointOptions, UserLocationRadiusOptions } from './types/user-location.type';

//#region Plugin
export class CapacitorMaplibreWeb extends WebPlugin implements CapacitorMaplibre {

  private readonly maps = new Map<string, GLMap>();
  private readonly mapIdByIdentifier = new Map<number, string>();

  private readonly userLocationByMap = new Map<string, UserLocation>();

  private readonly markerMap = new Map<string, Marker>();
  private markerIndex = 0;

  private getAndVerifyMap(options: MapEvent<any>) {
    const map = this.maps.get(options.mapId);
    if (map) {
      return map;
    }

    throw new Error(`MapId '${options.mapId}' is not registered!`);
  }

  createMap(options: MapCreateOptions): Promise<void> {
    if (this.maps.has(options.mapId)) {
      throw new Error('MapId is already registered!');
    }

    const map = new GLMap({
      container: options.element,
      style: JSON.parse(options.style as string),
      maxBounds: [
        options.maxBounds.lngEast,
        options.maxBounds.latSouth,
        options.maxBounds.lngWest,
        options.maxBounds.latNorth
      ],
      center: options.center,
      bearing: options.bearing,
      pitch: options.pitch,
      zoom: options.zoom,
      maxZoom: options.maxZoom,
      minZoom: options.minZoom,
      attributionControl: false,
      renderWorldCopies: false,
      doubleClickZoom: false,
      maplibreLogo: false,
      validateStyle: options.validateStyle
    });
    this.maps.set(options.mapId, map);
    this.mapIdByIdentifier.set(map._mapId, options.mapId);

    map.once('load', event => this.notifyListeners('load', {
      mapId: options.mapId,
      ...event
    }));

    this.setupAllMapListener(map);
    return Promise.resolve();
  }

  updateMap(options: MapEvent<MapUpdateOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const data: MapUpdateOptions = options.data;

    map.setStyle(JSON.parse(data.style as string), {
      diff: true
    });

    map.setMaxBounds([
      data.maxBounds.lngEast,
      data.maxBounds.latSouth,
      data.maxBounds.lngWest,
      data.maxBounds.latNorth
    ]);

    map.setCenter(data.center);

    map.setMaxZoom(data.maxZoom);
    map.setMinZoom(data.minZoom);

    return Promise.resolve();
  }

  async removeMap(options: MapEvent<any>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const mapId = options.mapId;
    const userLocation = this.userLocationByMap.get(mapId);
    if (userLocation) {
      this.userLocationByMap.delete(mapId);
      await userLocation.destroy();
    }

    map.remove();
    this.maps.delete(mapId);
    for (const entry of this.mapIdByIdentifier) {
      if (entry[1] === mapId) {
        this.mapIdByIdentifier.delete(entry[0]);
      }
    }
  }

  setStyle(options: MapEvent<string>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    map.setStyle(JSON.parse(options.data), {
      diff: true
    });
    return Promise.resolve();
  }

  moveCamera(options: MapEvent<FlyToOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    map.flyTo(options.data);
    return Promise.resolve();
  }

  zoomTo(options: MapEvent<ZoomToOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    map.zoomTo(options.data.zoom, options.data.options);
    return Promise.resolve();
  }

  easeTo(options: MapEvent<EaseToOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    map.easeTo(options.data);
    return Promise.resolve();
  }

  queryRenderedFeatures(options: MapEvent<QueryRenderedFeaturesData>): Promise<MapGeoJSONFeature[]> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;
    return Promise.resolve(map.queryRenderedFeatures([ data.point.x, data.point.y ], data.options));
  }

  querySourceFeatures(options: MapEvent<QuerySourceFeatureData>): Promise<MapGeoJSONFeature[]> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;
    return Promise.resolve(map.querySourceFeatures(data.sourceId, data.options) as MapGeoJSONFeature[]);
  }

  resetNorthPitch(options: MapEvent<AnimationOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    map.resetNorthPitch(options.data);
    return Promise.resolve();
  }

  fitBounds(options: MapEvent<MapFitBoundsOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;
    map.fitBounds(data.bounds, data.options);
    return Promise.resolve();
  }

  getBounds(options: MapEvent<void>): Promise<LngLatBounds> {
    const map = this.getAndVerifyMap(options);
    return Promise.resolve(map.getBounds());
  }

  addLayer(options: MapEvent<LayerAddOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;
    map.addLayer(data.layer, data.beforeLayerId);
    return Promise.resolve();
  }

  getLayer(options: MapEvent<string>): Promise<LayerSpecification | undefined> {
    const map = this.getAndVerifyMap(options);
    return Promise.resolve(map.getLayer(options.data) as LayerSpecification);
  }

  getLayersOrder(options: MapEvent<void>): Promise<LayerSpecification[]> {
    const map = this.getAndVerifyMap(options);
    const layers: LayerSpecification[] = [];
    for (const layerId in map.getLayersOrder()) {
      const layer = map.getLayer(layerId);
      if (layer) {
        layers.push(layer as LayerSpecification);
      }
    }
    return Promise.resolve(layers);
  }

  updateLayer(options: MapEvent<LayerSpecification>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;

    const layer = map.getLayer(data.id);
    if (layer) {
      (layer as any).setData(data);
    }
    return Promise.resolve();
  }

  moveLayer(options: MapEvent<LayerMoveOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    map.moveLayer(options.data.layerId, options.data.beforeLayerId);
    return Promise.resolve();
  }

  removeLayer(options: MapEvent<LayerRemoveOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const layerId = options.data.layerId;
    if (layerId) {
      map.removeLayer(layerId);
    }
    return Promise.resolve();
  }

  addSource(options: MapEvent<SourceAddOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    map.addSource(options.data.sourceId, options.data.source);
    return Promise.resolve();
  }

  getSource(options: MapEvent<string>): Promise<Source | undefined> {
    const map = this.getAndVerifyMap(options);
    return Promise.resolve(map.getSource(options.data));
  }

  updateSource(options: MapEvent<SourceUpdateOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;

    const source = map.getSource(data.sourceId);
    if (source) {
      (source as any).setData(data.data);
    }
    return Promise.resolve();
  }

  removeSource(options: MapEvent<SourceRemoveOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const sourceId = options.data.sourceId;
    if (map.getSource(sourceId)) {
      map.removeSource(options.data.sourceId);
    }
    return Promise.resolve();
  }

  setProperty(options: MapEvent<PropertySetOptions>): Promise<void> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;
    const layerId = data.layerId;

    const layer = data.layer;
    if (layer) {
      for (const key in layer) {
        const value = layer[key];
        if (map.getLayoutProperty(layerId, key) !== value) {
          map.setLayoutProperty(layerId, key, value);
        }
      }
    }

    const paint = data.paint;
    if (paint) {
      for (const key in paint) {
        const value = paint[key];
        if (map.getPaintProperty(layerId, key) !== value) {
          map.setPaintProperty(layerId, key, value);
        }
      }
    }

    return Promise.resolve();
  }

  getLayerProperty(options: MapEvent<PropertyGetOptions>): Promise<any> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;
    return Promise.resolve(map.getLayoutProperty(data.layerId, data.name));
  }

  getPaintProperty(options: MapEvent<PropertyGetOptions>): Promise<any> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;
    return Promise.resolve(map.getPaintProperty(data.layerId, data.name));
  }

  addMarker(options: MapEvent<MapMarkerAddOptions>): Promise<string> {
    const map = this.getAndVerifyMap(options);
    const data = options.data;

    const type = data.options.type;
    let marker: Marker | undefined;
    if (type === 'image') {
      const imageElement = document.createElement('img');
      imageElement.src = data.options.url;

      marker = new Marker({
        className: data.options.cssClass,
        element: imageElement
      });
    } else if (type === 'marker') {
      marker = new Marker({
        className: data.options.cssClass,
        color: data.options.color
      });
    }

    if (!marker) {
      throw new Error('Marker is undefined');
    }

    const index = `${this.markerIndex++}`;
    this.markerMap.set(index, marker);
    marker.setLngLat(data.position);
    marker.getElement().addEventListener('click', (event) => {
      event.stopImmediatePropagation();
      event.preventDefault();

      this.notifyListeners('markerclick', {
        mapId: options.mapId,
        id: index,
        shiftKey: event.shiftKey ?? false
      });
    });
    marker.addTo(map);
    return Promise.resolve(index);
  }

  updateMarker(options: MapEvent<MapMarkerUpdateOptions>): Promise<void> {
    this.getAndVerifyMap(options);
    const data = options.data;

    const marker = this.markerMap.get(data.markerId);
    if (!marker) {
      throw new Error('Marker is undefined');
    }

    if (data.position) {
      marker.setLngLat(data.position);
    }

    const type = data.options?.type;
    if (type) {
      const element = marker.getElement();
      if (type === 'image') {
        if (element instanceof HTMLImageElement) {
          // update image
          const url = data.options?.url;
          if (url) {
            element.src = url;
          }
        } else {
          // update to image
          // TODO update div to image
        }
      } else if (type === 'marker') {
        if (!(element instanceof HTMLImageElement)) {
          // update marker
          const color = data.options?.color;
          if (color) {
            marker._color = color;
          }
        } else {
          // update to marker
          // TODO update image to div
        }
      }
    }

    return Promise.resolve();
  }

  removeMarker(options: MapEvent<any>): Promise<void> {
    this.getAndVerifyMap(options);

    const data = options.data;
    const marker = this.markerMap.get(data);
    marker?.remove();

    this.markerMap.delete(data);
    return Promise.resolve();
  }

  showUserLocation(options: MapEvent<UserLocationEvent>): Promise<void> {
    const map = this.getAndVerifyMap(options);

    let userLocation = this.userLocationByMap.get(options.mapId);
    if (userLocation === undefined) {
      userLocation = new UserLocation(map);
      this.userLocationByMap.set(options.mapId, userLocation);
    }
    return userLocation.update(options.data);
  }

  updateUserLocation(options: MapEvent<UserLocationEvent>): Promise<void> {
    const userLocation = this.userLocationByMap.get(options.mapId);
    if (userLocation) {
      return userLocation.update(options.data);
    }
    return Promise.resolve();
  }

  hideUserLocation(options: MapEvent<void>): Promise<void> {
    const userLocation = this.userLocationByMap.get(options.mapId);
    if (userLocation) {
      this.userLocationByMap.delete(options.mapId);
      return userLocation.destroy();
    }
    return Promise.resolve();
  }

  onScroll(): Promise<void> {
    throw new Error('Method not implemented in web.');
  }

  onResize(): Promise<void> {
    throw new Error('Method not implemented in web.');
  }

  onDisplay(): Promise<void> {
    throw new Error('Method not implemented in web.');
  }

  dispatchMapEvent(): Promise<void> {
    throw new Error('Method not implemented in web.');
  }

  private setupAllMapListener(map: GLMap) {
    for (const eventName of MAP_EVENT_TYPES) {
      this.registerMapListener(map, eventName);
    }
  }

  private registerMapListener<T extends keyof MapListenerType>(map: GLMap, name: T) {
    // custom event
    if (name === 'markerclick') {
      return;
    }

    const mapIdentifier = this.mapIdByIdentifier.get(map._mapId);
    if (!mapIdentifier) {
      throw new Error('Map identifier not found!');
    }

    if (name === 'click') {
      map.on(name, event => this.notifyListeners(name, {
        mapId: mapIdentifier,
        ... this.convertEvent(name, event as Event)
      }));
      return;
    }

    let throttleDelay = 250;
    if (name === 'move') {
      throttleDelay = 25;
    }

    const delay$ = new Subject<any>();
    delay$.pipe(throttleTime(throttleDelay, undefined, { leading: true, trailing: true }))
      .subscribe(event => this.notifyListeners(name, {
        mapId: mapIdentifier,
        ... this.convertEvent(name, event)
      }));

    map.on(name, event => delay$.next(event));
  }

  private convertEvent<T extends keyof MapListenerType>(name: T, event: Event): MapListenerType[T] {
    // const type = event.type as keyof MapEventType;
    const map = event.target as any as GLMap;
    // const originalEvent = (event as any).originalEvent as Event;

    switch (name) {
      case 'zoom':
      case 'zoomstart':
      case 'zoomend':
      case 'pitch':
      case 'pitchstart':
      case 'pitchend':
      case 'rotate':
      case 'rotatestart':
      case 'rotateend':
      case 'move':
      case 'movestart':
      case 'moveend':
      {
        const center = map.getCenter();
        const transform = map.transform;
        return {
          centerLat: center.lat,
          centerLng: center.lng,
          zoom: transform.zoom,
          pitch: transform.pitch,
          bearing: transform.bearing,
          roll: transform.roll,
          fov: transform.fov
        } as MapMoveEvent;
      }

      case 'mousedown':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'mouseup':
      case 'contextmenu':
      case 'dbclick':
      case 'click':
      {
        const eventCast = event as any as MapMouseEvent;
        return {
          lngLat: {
            lng: eventCast.lngLat.lng,
            lat: eventCast.lngLat.lat
          },
          point: {
            x: eventCast.point.x,
            y: eventCast.point.y
          },
          shiftKey: eventCast.originalEvent.shiftKey ?? false
        } as MapClickEvent;
      }

      default:
        return event;
    }
  }
}

//#endregion

//#region UserLocation

class UserLocation {

  private readonly map: GLMap;

  private position?: Position;
  private positionTrackId?: string;

  private pointElementParent?: HTMLDivElement;
  private pointElementChild?: HTMLElement;
  private pointMarker?: Marker;

  private directionElementParent?: HTMLDivElement;
  private directionElementChild?: HTMLElement;
  private directionElementImage?: HTMLElement;
  private directionMarker?: Marker;

  private radiusElementParent?: HTMLDivElement;
  private radiusElementChild?: HTMLElement;
  private radiusMarker?: Marker;

  private currentValue$ = new BehaviorSubject<number>(0);
  private targetValue$ = new BehaviorSubject<number>(0);

  private animation$ = this.targetValue$.pipe(
    switchMap((target) => {
      const current = this.currentValue$.getValue();
      const delta = Math.abs(target - current);
      if (delta > 180) {
        if (current > target) {
          return of(1).pipe(concatMap(() => this.animate(current, 360, Math.floor(target))));
        } else {
          return of(1).pipe(concatMap(() => this.animate(current, 0, Math.floor(target))));
        }
      }
      return this.animate(current, Math.floor(target), Math.floor(target));
    })
  ).subscribe(rotation => {
    this.currentValue$.next(rotation);

    if (this.position?.heading && this.directionElementChild) {
      this.directionElementChild.style.transform = `rotateZ(${(rotation + 180) % 360}deg)`;
    }
  });

  private readonly drawListener = this.draw.bind(this);

  constructor(map: GLMap) {
    this.map = map;

    this.map.on('zoom', this.drawListener);
    this.map.on('zoomend', this.drawListener);
  }

  private animate(start: number, skipPoint: number, dest: number) {
    let direction = skipPoint > start ? 1 : -1;
    let step = 1;

    if (start == dest) {
      return of(dest);
    }

    return interval(5).pipe(
      rxMap(() => {
        const result = start + direction * step++;
        if (result >= 360) {
          step = 1;
          start = 0;
          direction = +1;
          return 0;
        } else if (result <= 0) {
          step = 1;
          start = 360;
          direction = -1;
          return 360;
        }
        return result;
      }),
      takeWhile((i) => i !== dest));
  }

  async update(event: UserLocationEvent) {
    if (event.point !== undefined) {
      this.updatePoint(event.point);
    }

    if (event.radius !== undefined) {
      this.updateRadius(event.radius);
    }

    if (event.direction !== undefined) {
      this.updateDirection(event.direction);
    }

    if (event.autoRefresh !== undefined) {
      this.updateAutoRefresh(event.autoRefresh);
    }

    if (event.location !== undefined) {
      this.updatePosition(event.location);
    }
  }

  updatePoint(options: UserLocationPointOptions) {
    if (options.enable) {
      if (!this.pointElementChild) {
        // create new
        if (options.image) {
          const element = document.createElement('img');
          element.src = options.image;
          element.style.width = '100%';
          element.style.height = '100%';
          this.pointElementChild = element;
        } else {
          const element = document.createElement('div');
          element.style.backgroundColor = options.color ?? 'blue';
          element.style.borderRadius = '50%';
          element.style.width = '100%';
          element.style.height = '100%';
          this.pointElementChild = element;
        }
      } else {
        // update
        if (options.image) {
          if (this.pointElementChild instanceof HTMLImageElement) {
            // update image
            this.pointElementChild.src = options.image;
          } else {
            // recreate as image
            const element = document.createElement('img');
            element.src = options.image;
            element.style.width = '100%';
            element.style.height = '100%';

            this.pointElementParent?.removeChild(this.pointElementChild);
            this.pointElementParent?.appendChild(element);
            this.pointElementChild = element;
          }
        } else {
          if (this.pointElementChild instanceof HTMLDivElement) {
            // update color
            this.pointElementChild.style.backgroundColor = options.color ?? 'blue';
          } else {
            // recreate as div
            const element = document.createElement('div');
            element.style.backgroundColor = options.color ?? 'blue';
            element.style.borderRadius = '50%';
            element.style.width = '100%';
            element.style.height = '100%';

            this.pointElementParent?.removeChild(this.pointElementChild);
            this.pointElementParent?.appendChild(element);
            this.pointElementChild = element;
          }
        }
      }

      if (!this.pointElementParent) {
        this.pointElementParent = document.createElement('div');
        this.pointElementParent.appendChild(this.pointElementChild);
        this.pointElementParent.style.display = 'flex';
        this.pointElementParent.style.width = 'calc(var(--scaleByZoom, 1) * 10px)';
        this.pointElementParent.style.height = 'calc(var(--scaleByZoom, 1) * 10px)';
        this.pointElementParent.style.zIndex = `${options.index ?? 3}`;
      }

      if (options.scale) {
        this.pointElementParent.style.setProperty('--scale', `${options.scale}`);
      }

      if (!this.pointMarker) {
        this.pointMarker = new Marker({
          element: this.pointElementParent
        });
        this.pointMarker.setRotationAlignment('map');
        this.pointMarker.setPitchAlignment('map');
        this.pointMarker.setLngLat([ 0, 0 ]);
        this.pointMarker.addTo(this.map);
      }
    } else {
      if (this.pointMarker) {
        this.pointMarker.remove();
      }
    }
  }

  updateDirection(options: UserLocationDirectionOptions) {
    if (options.enable) {
      if (!this.directionElementImage) {
        // create new
        if (options.image) {
          const element = document.createElement('img');
          element.src = options.image;
          element.style.position = 'absolute';
          element.style.width = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
          element.style.height = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
          element.style.setProperty('transform-origin', 'center top');
          this.directionElementImage = element;
        } else {
          // TODO add default layout
          const element = document.createElement('div');
          element.style.position = 'absolute';
          element.style.width = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
          element.style.height = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
          element.style.backgroundColor = options.color ?? 'blue';
          element.style.setProperty('transform-origin', 'center top');
          this.directionElementImage = element;
        }
      } else {
        // update
        if (options.image) {
          if (this.directionElementImage instanceof HTMLImageElement) {
            // update image
            this.directionElementImage.src = options.image;
          } else {
            // recreate as image
            const element = document.createElement('img');
            element.src = options.image;
            element.style.position = 'absolute';
            element.style.width = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
            element.style.height = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
            element.style.setProperty('transform-origin', 'center top');

            this.directionElementChild?.removeChild(this.directionElementImage);
            this.directionElementChild?.appendChild(element);
            this.directionElementImage = element;
          }
        } else {
          if (this.directionElementImage instanceof HTMLDivElement) {
            // update color
            this.directionElementImage.style.backgroundColor = options.color ?? 'blue';
          } else {
            // recreate as div
            const element = document.createElement('div');
            element.style.position = 'absolute';
            element.style.width = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
            element.style.height = 'calc((var(--scaleByZoom, 1) * 10px) * 2)';
            element.style.backgroundColor = options.color ?? 'blue';
            element.style.setProperty('transform-origin', 'center top');

            this.directionElementChild?.removeChild(this.directionElementImage);
            this.directionElementChild?.appendChild(element);
            this.directionElementImage = element;
          }
        }
      }

      if (!this.directionElementParent) {
        this.directionElementChild = document.createElement('div');
        this.directionElementChild.appendChild(this.directionElementImage);
        this.directionElementChild.style.width = '100%';
        this.directionElementChild.style.height = '100%';
        // this.directionElementChild.style.transition = 'transform 0.5s';

        this.directionElementParent = document.createElement('div');
        this.directionElementParent.appendChild(this.directionElementChild);
        this.directionElementParent.style.display = 'flex';
        this.directionElementParent.style.width = 'calc(var(--scaleByZoom, 1) * 10px)';
        this.directionElementParent.style.height = 'calc(var(--scaleByZoom, 1) * 10px)';
        this.directionElementParent.style.zIndex = `${options.index ?? 2}`;
        (this.directionElementParent?.style as any)['--scaleByZoom'] = 1;
      }

      if (options.scale) {
        this.directionElementParent.style.setProperty('--scale', `${options.scale}`);
      }

      if (!this.directionMarker) {
        this.directionMarker = new Marker({
          element: this.directionElementParent
        });
        this.directionMarker.setRotationAlignment('map');
        this.directionMarker.setPitchAlignment('map');
        this.directionMarker.setLngLat([ 0, 0 ]);
        this.directionMarker.addTo(this.map);
      }
    } else {
      if (this.directionMarker) {
        this.directionMarker.remove();
      }
    }
  }

  updateRadius(options: UserLocationRadiusOptions) {
    if (options.enable) {
      if (!this.radiusElementChild) {
        // create new
        if (options.image) {
          const element = document.createElement('img');
          element.src = options.image;
          element.style.width = '100%';
          element.style.height = '100%';
          this.radiusElementChild = element;
        } else {
          const element = document.createElement('div');
          element.style.backgroundColor = options.color ?? 'blue';
          element.style.borderRadius = '50%';
          element.style.width = '100%';
          element.style.height = '100%';
          this.radiusElementChild = element;
        }
      } else {
        // update
        if (options.image) {
          if (this.radiusElementChild instanceof HTMLImageElement) {
            // update image
            this.radiusElementChild.src = options.image;
          } else {
            // recreate as image
            const element = document.createElement('img');
            element.src = options.image;
            element.style.width = '100%';
            element.style.height = '100%';

            this.radiusElementParent?.removeChild(this.radiusElementChild);
            this.radiusElementParent?.appendChild(element);
            this.radiusElementChild = element;
          }
        } else {
          if (this.radiusElementChild instanceof HTMLDivElement) {
            // update color
            this.radiusElementChild.style.backgroundColor = options.color ?? 'blue';
          } else {
            // recreate as div
            const element = document.createElement('div');
            element.style.backgroundColor = options.color ?? 'blue';
            element.style.borderRadius = '50%';
            element.style.width = '100%';
            element.style.height = '100%';

            this.radiusElementParent?.removeChild(this.radiusElementChild);
            this.radiusElementParent?.appendChild(element);
            this.radiusElementChild = element;
          }
        }
      }

      if (!this.radiusElementParent) {
        this.radiusElementParent = document.createElement('div');
        this.radiusElementParent.appendChild(this.radiusElementChild);
        this.radiusElementParent.style.display = 'flex';
        this.radiusElementParent.style.width = '0px';
        this.radiusElementParent.style.height = '0px';
        this.radiusElementParent.style.zIndex = `${options.index ?? 1}`;
      }

      if (!this.radiusMarker) {
        this.radiusMarker = new Marker({
          element: this.radiusElementParent
        });
        this.radiusMarker.setRotationAlignment('map');
        this.radiusMarker.setPitchAlignment('map');
        this.radiusMarker.setLngLat([ 0, 0 ]);
        this.radiusMarker.addTo(this.map);
      }
    } else {
      if (this.radiusMarker) {
        this.radiusMarker.remove();
      }
    }
  }

  async updateAutoRefresh(options: UserLocationAutoRefreshOptions) {
    if (options.enable) {
      if (Capacitor.getPlatform() === 'android'
        && Capacitor.isPluginAvailable('BluetoothLe')
        && !await BleClient.isLocationEnabled()
        && Capacitor.isPluginAvailable('Geolocation')) {
        console.log('Location is disabled! Unable to track current position.');
        return;
      }

      if (this.positionTrackId) {
        await Geolocation.clearWatch({ id: this.positionTrackId });
      }
      this.positionTrackId = await Geolocation.watchPosition(options, (position, error) => this.updatePosition(position?.coords, error));
    } else if (this.positionTrackId) {
      await Geolocation.clearWatch({ id: this.positionTrackId });
      this.positionTrackId = undefined;
    }
  }

  updatePosition(position?: Position, error?: any) {
    if (error) {
      // const errorCode = error.code;
      /*
      * 1: User denied Geolocation
      * 2: Unknown error acquiring position
      * 3: Position acquisition timed out
      */

      // TODO handle error results
    } else if (position) {
      this.position = position;
      this.draw();
    }
  }

  drawPoint(position: Position, marker: Marker) {
    marker.setLngLat({
      lat: position.latitude,
      lng: position.longitude
    });

    const zoom = this.map.getZoom();
    if (this.pointElementParent) {
      const styleScale = this.pointElementParent?.style.getPropertyValue('--scale');
      const scale = styleScale ? +styleScale : 1;
      const scaleByZoom = (10 / 50) * zoom * scale;
      this.pointElementParent?.style.setProperty('--scaleByZoom', `${scaleByZoom}`);
    }
  }

  drawRadius(position: Position, marker: Marker) {
    if (position.accuracy === -1) {
      if (marker._opacity !== '0') {
        marker.setOpacity('0');
      }
      return;
    } else if (marker._opacity !== '1') {
      marker.setOpacity('1');
    }

    marker.setLngLat({
      lat: position.latitude,
      lng: position.longitude
    });

    if (this.radiusElementParent) {
      let accuracy = position.accuracy; // meters
      if (accuracy > 100) {
        // TODO handle to high accuracy
        // return;
        accuracy = 100;
      }

      const pixelRatio = 1 / this.metersPerPixelAtLatitude(position.latitude, this.map.getZoom());
      const scale = accuracy * pixelRatio;

      this.radiusElementParent.style.width = `${scale}px`;
      this.radiusElementParent.style.height = `${scale}px`;
    }
  }

  drawDirection(position: Position, marker: Marker) {
    marker.setLngLat({
      lat: position.latitude,
      lng: position.longitude
    });

    if (position.heading && this.directionElementChild) {
      this.targetValue$.next(position.heading);
    }

    const zoom = this.map.getZoom();
    if (this.directionElementImage) {
      const styleScale = this.directionElementParent?.style.getPropertyValue('--scale');
      const scale = styleScale ? +styleScale : 1;
      const scaleByZoom = (10 / 40) * zoom * scale;
      this.directionElementParent?.style.setProperty('--scaleByZoom', `${scaleByZoom}`);
    }
  }

  draw() {
    const position = this.position;
    if (position) {
      if (this.pointMarker) {
        this.drawPoint(position, this.pointMarker);
      }

      if (this.radiusMarker) {
        this.drawRadius(position, this.radiusMarker);
      }

      if (this.directionMarker) {
        this.drawDirection(position, this.directionMarker);
      }
    }
  }

  metersPerPixelAtLatitude(latitude: number, zoom: number) {
    const earthCircumference = 40075016.686;
    const latitudeRad = latitude * Math.PI / 180;
    return earthCircumference * Math.cos(latitudeRad) / Math.pow(2, zoom + 8);
  }

  async destroy() {
    if (this.positionTrackId) {
      await Geolocation.clearWatch({ id: this.positionTrackId });
      this.positionTrackId = undefined;
    }

    this.map.off('zoom', this.drawListener);
    this.map.off('zoomend', this.drawListener);

    this.targetValue$.complete();
    this.targetValue$.unsubscribe();
    this.currentValue$.complete();
    this.currentValue$.unsubscribe();
    this.animation$.unsubscribe();

    this.pointMarker?.remove();
    this.pointMarker = undefined;
    this.pointElementChild?.remove();
    this.pointElementChild = undefined;
    this.pointElementParent?.remove();
    this.pointElementParent = undefined;

    this.radiusMarker?.remove();
    this.radiusMarker = undefined;
    this.radiusElementChild?.remove();
    this.radiusElementChild = undefined;
    this.radiusElementParent?.remove();
    this.radiusElementParent = undefined;

    this.directionMarker?.remove();
    this.directionMarker = undefined;
    this.directionElementImage?.remove();
    this.directionElementImage = undefined;
    this.directionElementChild?.remove();
    this.directionElementChild = undefined;
    this.directionElementParent?.remove();
    this.directionElementParent = undefined;
  }
}

//#endregion
