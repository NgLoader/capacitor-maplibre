import { MapTerrainEvent } from 'maplibre-gl';
import { LngLat, Point } from '../models/lnglat.type';

export type MapListenerCallback<T> = (data: T) => void;

export interface MapClickEvent {
  lngLat: LngLat
  point: Point
  shiftKey: boolean
}

export interface MapMarkerClickEvent {
  id: string;
  shiftKey: boolean
}

export interface MapMoveEvent {
  centerLat: number
  centerLng: number
  zoom: number
  pitch: number
  bearing: number
  roll: number
  fov: number
}

export interface MapListenerType {
  boxzoomcancel: any
  boxzoomend: any
  boxzoomstart: any
  markerclick: MapMarkerClickEvent
  click: MapClickEvent
  contextmenu: MapClickEvent
  dbclick: MapClickEvent
  data: any
  dataabort: any
  dataloading: any
  dblclick: any
  drag: any
  dragend: any
  dragstart: any
  error: any
  idle: any
  load: any
  mousedown: MapClickEvent
  mousemove: MapClickEvent
  mouseout: MapClickEvent
  mouseover: MapClickEvent
  mouseup: MapClickEvent
  move: MapMoveEvent
  moveend: MapMoveEvent
  movestart: MapMoveEvent
  pitch: MapMoveEvent
  pitchend: MapMoveEvent
  pitchstart: MapMoveEvent
  ready: any
  resize: any
  rotate: MapMoveEvent
  rotateend: MapMoveEvent
  rotatestart: MapMoveEvent
  sourcedata: any
  sourcedataabort: any
  sourcedataloading: any
  styledata: any
  styledataloading: any
  styleimagemissing: any
  terrain: MapTerrainEvent
  tiledataloading: any
  touchcancel: any
  touchend: any
  touchmove: any
  touchstart: any
  webglcontextlost: any
  webglcontextrestored: any
  wheel: any
  zoom: MapMoveEvent
  zoomend: MapMoveEvent
  zoomstart: MapMoveEvent
}

export const MAP_EVENT_TYPES: (keyof MapListenerType)[] = [
  'boxzoomcancel',
  'boxzoomend',
  'boxzoomstart',
  'markerclick',
  'click',
  'contextmenu',
  'data',
  'dataabort',
  'dataloading',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'error',
  'idle',
  'load',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'move',
  'moveend',
  'movestart',
  'pitch',
  'pitchend',
  'pitchstart',
  'ready',
  'resize',
  'rotate',
  'rotateend',
  'rotatestart',
  'sourcedata',
  'sourcedataabort',
  'sourcedataloading',
  'styledata',
  'styledataloading',
  'styleimagemissing',
  'terrain',
  'tiledataloading',
  'touchcancel',
  'touchend',
  'touchmove',
  'touchstart',
  'webglcontextlost',
  'webglcontextrestored',
  'wheel',
  'zoom',
  'zoomend',
  'zoomstart'
];
