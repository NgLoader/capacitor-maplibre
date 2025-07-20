export class LngLat {
  lng: number = 0;
  lat: number = 0;

  constructor(lng: number, lat: number) {
    this.lng = lng;
    this.lat = lat;
  }
}

export interface LngLatBounds {
  latNorth: number
  lngEast: number
  latSouth: number
  lngWest: number
}

export interface Point {
  x: number
  y: number
}

export interface Position {
  latitude: number
  longitude: number
  accuracy: number
  altitude?: number | null
  speed?: number | null
  heading?: number | null
}
