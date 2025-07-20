package de.ngloader.plugins.maplibre.map;

import android.os.Bundle;

import androidx.annotation.UiThread;

import org.maplibre.android.maps.MapView;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import de.ngloader.plugins.maplibre.CapacitorMaplibrePlugin;
import de.ngloader.plugins.maplibre.util.CapacitorMapEvent;

public class CapacitorMapRegistry {

  private static final Map<String, CapacitorMap> REGISTERED_MAP = new ConcurrentHashMap<>();

  @UiThread
  public static CapacitorMap createMap(CapacitorMaplibrePlugin plugin, String mapId, int width, int height, int x, int y, float pixelRatio, CapacitorMapEvent mapReady) {
    CapacitorMap map = new CapacitorMap(plugin, mapId, width, height, x, y, pixelRatio, mapReady);
    REGISTERED_MAP.put(map.getMapId(), map);
    return map;
  }

  public static CapacitorMap getMap(String mapId) {
    return mapId != null ? REGISTERED_MAP.get(mapId) : null;
  }

  public static Collection<CapacitorMap> getMaps() {
    return Collections.unmodifiableCollection(REGISTERED_MAP.values());
  }

  @UiThread
  public static boolean deleteMap(String id) {
    CapacitorMap map = REGISTERED_MAP.remove(id);
    if (map == null) {
      return false;
    }

    map.destroy();
    return true;
  }

  public static void handleOnStart() {
    handleMap(MapView::onStart);
  }

  public static void handleOnResume() {
    handleMap(MapView::onResume);
  }

  public static void handleOnPause() {
    handleMap(MapView::onPause);
  }

  public static void handleOnStop() {
    handleMap(MapView::onStop);
  }

  public static void handleOnLowMemory() {
    handleMap(MapView::onLowMemory);
  }

  public static void handleOnDestroy() {
    handleMap(MapView::onDestroy);
  }

  public static void handleOnSaveInstanceState(Bundle outState) {
    handleMap(map -> map.onSaveInstanceState(outState));
  }

  private static void handleMap(Callback call) {
    for (CapacitorMap instance : REGISTERED_MAP.values()) {
      call.handle(instance.getMapView());
    }
  }

  private interface Callback {
    void handle(MapView view);
  }
}
