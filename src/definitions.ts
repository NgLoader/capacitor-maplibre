import type { Plugin } from '@capacitor/core';
import { AnimationOptions, EaseToOptions, FlyToOptions, LayerSpecification, LngLatBounds, MapGeoJSONFeature, Source } from 'maplibre-gl';
import type { ElementFromPointResultOptions as DispatchMapEventOptions } from './models/element-from-point.type';
import type { LayerAddOptions, LayerMoveOptions, LayerRemoveOptions, PropertyGetOptions, PropertySetOptions, QueryRenderedFeaturesData, QuerySourceFeatureData } from './types/layer.type';
import type { MapBoundsOptions, MapCreateOptions, MapEvent, MapFitBoundsOptions, MapUpdateOptions, ZoomToOptions } from './types/map.type';
import type { MapMarkerAddOptions, MapMarkerUpdateOptions } from './types/marker.type';
import type { SourceAddOptions, SourceRemoveOptions, SourceUpdateOptions } from './types/source.type';
import type { UserLocationEvent } from './types/user-location.type';

export interface DidRequestElementFromPointResult {
  eventChainId: string;
  point?: {
    x: number;
    y: number;
  };
}

export interface CapacitorMaplibre extends Plugin {
  createMap(options: MapCreateOptions): Promise<void>
  updateMap(options: MapEvent<MapUpdateOptions>): Promise<void>
  removeMap(options: MapEvent<any>): Promise<void>

  setStyle(options: MapEvent<string>): Promise<void>

  moveCamera(options: MapEvent<FlyToOptions>): Promise<void>
  zoomTo(options: MapEvent<ZoomToOptions>): Promise<void>
  easeTo(options: MapEvent<EaseToOptions>): Promise<void>

  queryRenderedFeatures(options: MapEvent<QueryRenderedFeaturesData>): Promise<MapGeoJSONFeature[]>
  querySourceFeatures(options: MapEvent<QuerySourceFeatureData>): Promise<MapGeoJSONFeature[]>

  resetNorthPitch(options: MapEvent<AnimationOptions>): Promise<void>
  fitBounds(options: MapEvent<MapFitBoundsOptions>): Promise<void>
  getBounds(options: MapEvent<void>): Promise<LngLatBounds>

  addLayer(options: MapEvent<LayerAddOptions>): Promise<void>
  getLayer(options: MapEvent<string>): Promise<LayerSpecification | undefined>
  getLayersOrder(options: MapEvent<void>): Promise<LayerSpecification[]>
  moveLayer(options: MapEvent<LayerMoveOptions>): Promise<void>
  updateLayer(options: MapEvent<LayerSpecification>): Promise<void>
  removeLayer(options: MapEvent<LayerRemoveOptions>): Promise<void>

  addSource(options: MapEvent<SourceAddOptions>): Promise<void>
  getSource(options: MapEvent<string>): Promise<Source | undefined>
  updateSource(options: MapEvent<SourceUpdateOptions>): Promise<void>
  removeSource(options: MapEvent<SourceRemoveOptions>): Promise<void>

  setProperty(options: MapEvent<PropertySetOptions>): Promise<void>
  getLayerProperty(options: MapEvent<PropertyGetOptions>): Promise<any>
  getPaintProperty(options: MapEvent<PropertyGetOptions>): Promise<any>

  addMarker(options: MapEvent<MapMarkerAddOptions>): Promise<string>
  updateMarker(options: MapEvent<MapMarkerUpdateOptions>): Promise<void>
  removeMarker(options: MapEvent<string>): Promise<void>

  showUserLocation(options: MapEvent<UserLocationEvent>): Promise<void>
  updateUserLocation(options: MapEvent<UserLocationEvent>): Promise<void>
  hideUserLocation(options: MapEvent<void>): Promise<void>

  onScroll(options: MapEvent<MapBoundsOptions>): Promise<void>
  onResize(options: MapEvent<MapBoundsOptions>): Promise<void>
  onDisplay(options: MapEvent<MapBoundsOptions>): Promise<void>

  dispatchMapEvent(options: DispatchMapEventOptions): Promise<void>;
}
