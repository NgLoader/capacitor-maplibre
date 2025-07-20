import { registerPlugin } from '@capacitor/core';
import type { CapacitorMaplibre } from './definitions';
import { CapacitorMaplibreWeb } from './web';

export const MapLibreSupportIos: boolean = false;
export const MapLibreSupportAndroid: boolean = false;

/**
 * This is a fix because registerPlugin is creating multiply instance!?
*/
let webInstance: CapacitorMaplibre;
function getWebInstance(): CapacitorMaplibre {
  if (!webInstance) {
    webInstance = new CapacitorMaplibreWeb();
  }
  return webInstance;
}

const CapacitorMaplibre = registerPlugin<CapacitorMaplibre>('CapacitorMaplibre', {
  android: () => import('./web').then(() => getWebInstance()),
  ios: () => import('./web').then(() => getWebInstance()),
  web: () => import('./web').then(() => getWebInstance()),
});

CapacitorMaplibre.addListener('isMapInFocus', (data) => {
  const x = data.x;
  const y = data.y;
  const mapId = data.mapId;

  const element = document.elementFromPoint(x, y) as HTMLElement | null;
  const internalId = element?.dataset['mapId'];
  const focus = internalId === mapId;

  CapacitorMaplibre.dispatchMapEvent({
    mapId,
    focus
  });
});

export { CapacitorMaplibre };

