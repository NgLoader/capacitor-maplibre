import { SourceSpecification } from 'maplibre-gl';

export interface SourceAddOptions {
  sourceId: string
  source: SourceSpecification
}

export interface SourceUpdateOptions {
  sourceId: string
  data: string | GeoJSON.GeoJSON
}

export interface SourceRemoveOptions {
  sourceId: string
}
