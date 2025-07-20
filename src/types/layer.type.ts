import { LayerSpecification, QueryRenderedFeaturesOptions, QuerySourceFeatureOptions } from 'maplibre-gl';
import { Point } from '../models/lnglat.type';

export interface LayerAddOptions {
  layer: LayerSpecification
  beforeLayerId?: string
}

export interface LayerMoveOptions {
  layerId: string
  beforeLayerId: string
}

export interface QueryRenderedFeaturesData {
  point: Point,
  options?: QueryRenderedFeaturesOptions
}

export interface QuerySourceFeatureData {
  sourceId: string,
  options?: QuerySourceFeatureOptions
}


export interface LayerRemoveOptions {
  layerId: string
}

export interface PropertySetOptions {
  layerId: string
  layer?: Record<string, any>
  paint?: Record<string, any>
}

export interface PropertyGetOptions {
  layerId: string
  name: string
}