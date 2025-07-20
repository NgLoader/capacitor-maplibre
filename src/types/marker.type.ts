import { LngLat } from '../models/lnglat.type';

export interface MapMarkerAddOptions {
  position: LngLat
  options: MapMarkerImageOptions | MapMarkerTypeOptions
}

export interface MapMarkerUpdateOptions {
  markerId: string
  position?: LngLat
  options?: MapMarkerImageOptions | MapMarkerTypeOptions
}

export interface MapMarkerOptions {
  index?: number
  cssClass?: string
}

export interface MapMarkerImageOptions extends MapMarkerOptions {
  type: 'image'
  url: string
}

export interface MapMarkerTypeOptions extends MapMarkerOptions {
  type: 'marker'
  color?: string
}