package de.ngloader.plugins.maplibre.map;

import com.getcapacitor.JSObject;

import org.maplibre.android.maps.MapLibreMap;

abstract class CapacitorMapExtension {

  protected final CapacitorMap instance;

  CapacitorMapExtension(CapacitorMap instance) {
    this.instance = instance;
  }

  protected MapLibreMap getMap() {
    return this.instance.getMap();
  }

  public void runOnUiThread(Runnable handle) {
    this.instance.runOnUiThread(handle);
  }
}
