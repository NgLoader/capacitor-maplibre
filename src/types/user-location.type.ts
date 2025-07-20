import { Position } from '../models/lnglat.type';

export interface UserLocationEvent {
  point?: UserLocationPointOptions
  radius?: UserLocationRadiusOptions
  direction?: UserLocationDirectionOptions
  autoRefresh?: UserLocationAutoRefreshOptions
  location?: Position
}

export interface UserLocationPointOptions {
  enable: boolean
  scale?: number
  color?: string
  image?: string
  index?: number
}

export interface UserLocationRadiusOptions {
  enable: boolean
  color?: string
  image?: string
  index?: number
}

export interface UserLocationDirectionOptions {
  enable: boolean
  scale?: number
  color?: string
  image?: string
  index?: number
}

export interface UserLocationAutoRefreshOptions {
  enable: boolean
  enableHighAccuracy?: boolean
  timeout?: number
  maximumAge?: number
}
