import { AnimationOptions, FitBoundsOptions, LngLatBoundsLike, StyleSpecification } from 'maplibre-gl';
import { LngLat, LngLatBounds } from '../models/lnglat.type';

export interface MapEvent<T> {
  mapId: string
  data: T
}

export interface MapCreateOptions {
  mapId: string
  element: HTMLElement
  elementWidth?: number
  elementHeight?: number
  elementX?: number
  elementY?: number
  devicePixelRatio?: number
  center: LngLat
  bearing: number
  pitch: number
  zoom: number
  maxZoom: number
  minZoom: number
  maxBounds: LngLatBounds
  style: StyleSpecification | string,
  validateStyle?: boolean
}

export interface MapUpdateOptions {
  style: StyleSpecification | string
  maxBounds: LngLatBounds
  center: LngLat
  maxZoom: number
  minZoom: number
}

export interface CameraMoveOptions {
  latlng: LngLat
  zoom?: number
  pitch?: number
  bearing?: number
  animate?: boolean
}

export interface ZoomToOptions {
  zoom: number,
  options?: AnimationOptions
}

export interface MapBoundsOptions {
  width: number
  height: number
  x: number
  y: number
}

export interface MapFitBoundsOptions {
  bounds: LngLatBoundsLike
  options?: FitBoundsOptions
}