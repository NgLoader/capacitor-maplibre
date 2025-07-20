package de.ngloader.plugins.maplibre;

import android.graphics.RectF;

import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import org.maplibre.android.camera.CameraPosition;
import org.maplibre.android.maps.MapLibreMap;
import org.maplibre.android.maps.Style;

import de.ngloader.plugins.maplibre.map.CapacitorMap;
import de.ngloader.plugins.maplibre.map.CapacitorMapEventType;
import de.ngloader.plugins.maplibre.map.CapacitorMapRegistry;
import de.ngloader.plugins.maplibre.util.CapacitorLatLng;
import de.ngloader.plugins.maplibre.util.CapacitorLatLngBounds;
import de.ngloader.plugins.maplibre.util.CapacitorMapEvent;

public class CapacitorMaplibreMethod {

  private final CapacitorMaplibrePlugin plugin;
  private CapacitorMaplibreTouchListener touchListener;

  CapacitorMaplibreMethod(CapacitorMaplibrePlugin plugin) {
    this.plugin = plugin;
  }

  void initialize() {
    this.touchListener = this.plugin.getTouchListener();
  }

  @PluginMethod
  public void dispatchMapEvent(PluginCall call) {
    this.touchListener.handleMapEvent(call);
    call.resolve();
  }

  @PluginMethod()
  public void createMap(PluginCall call) {
    String mapId = call.getString("mapId", null);

    Integer width = call.getInt("elementWidth", null);
    Integer height = call.getInt("elementHeight", null);
    Integer x = call.getInt("elementX", null);
    Integer y = call.getInt("elementY", null);

    Float pixelRatio = call.getFloat("devicePixelRatio", null);

    CapacitorLatLng center = new CapacitorLatLng(call.getObject("center"));
    Double zoom = call.getDouble("zoom", 0d);
    Double maxZoom = call.getDouble("maxZoom", 0d);
    Double minZoom = call.getDouble("minZoom", 0d);
    CapacitorLatLngBounds maxBounds = new CapacitorLatLngBounds(call.getObject("maxBounds"));

    String style = call.getString("style", null);

    // TODO validate properties

    if (width == null || height == null || x == null || y == null) {
      call.reject("Invalid element properties!");
      return;
    }

    if (CapacitorMapRegistry.getMap(mapId) != null) {
      call.reject("Map id is already registered!");
      return;
    }

    this.runOnUiThread(() -> {
      CapacitorMapRegistry.createMap(this.plugin, mapId, width, height, x, y, pixelRatio, instance -> {
        MapLibreMap map = instance.getMap();
        map.setStyle(new Style.Builder().fromJson(style));

        map.setLatLngBoundsForCameraTarget(maxBounds.toMaplibre());
        map.setMaxZoomPreference(maxZoom);
        map.setMinZoomPreference(minZoom);

        map.setCameraPosition(new CameraPosition.Builder()
          .target(center.toMaplibre())
          .zoom(zoom)
          .build());

        call.resolve();
      });
    });
  }

  @PluginMethod()
  public void updateMap(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.handleUpdateMap(call));
  }

  @PluginMethod(returnType = PluginMethod.RETURN_NONE)
  public void removeMap(PluginCall call) {
    String mapId = call.getString("mapId", null);
    this.runOnUiThread(() -> {
      if (CapacitorMapRegistry.deleteMap(mapId)) {
        call.resolve();
      } else {
        call.reject("Map id not found!");
      }
    });
  }

  @PluginMethod()
  public void setStyle(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.handleStyle(call));
  }

  @PluginMethod()
  public void moveCamera(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getCamera().handleMoveCamera(call));
  }

  @PluginMethod()
  public void zoomTo(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getCamera().handleZoomCamera(call));
  }

  @PluginMethod
  public void queryRenderedFeatures(PluginCall call) {
  }

  @PluginMethod()
  public void addLayer(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getLayer().handleAddLayer(call));
  }

  @PluginMethod()
  public void updateLayer(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getLayer().handleUpdateLayer(call));
  }

  @PluginMethod()
  public void setLayerProperties(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getLayer().handleSetLayerProperties(call));
  }

  @PluginMethod()
  public void moveLayer(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getLayer().handleMoveLayer(call));
  }

  @PluginMethod()
  public void removeLayer(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getLayer().handleRemoveLayer(call));
  }

  @PluginMethod()
  public void addSource(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getSource().handleAddSource(call));
  }

  @PluginMethod()
  public void updateSource(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getSource().handleUpdateSource(call));
  }

  @PluginMethod()
  public void removeSource(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.getSource().handleRemoveSource(call));
  }

  @PluginMethod()
  public void addMarker(PluginCall call) {
  }

  @PluginMethod()
  public void updateMarker(PluginCall call) {
  }

  @PluginMethod()
  public void removeMarker(PluginCall call) {
  }

  @PluginMethod()
  public void onScroll(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.updateView(this.parseRectF(call)));
  }

  @PluginMethod()
  public void onResize(PluginCall call) {
    this.getMapAndHandle(call, true, map -> map.updateView(this.parseRectF(call)));
  }

  @PluginMethod()
  public void onDisplay(PluginCall call) {
    // call.unavailable();
  }

  public RectF parseRectF(PluginCall call) {
    Float width = call.getFloat("width", null);
    Float height = call.getFloat("height", null);
    Float x = call.getFloat("x", null);
    Float y = call.getFloat("y", null);

    if (width == null || height == null || x == null || y == null) {
      call.reject("Invalid bound values!");
      return null;
    }

    return new RectF(x, y, (x + width), (y + height));
  }

  public void getMapAndHandle(PluginCall call, boolean resolve, CapacitorMapEvent event) {
    String mapId = call.getString("mapId", null);
    if (mapId == null) {
      call.reject("Invalid mapId!");
      return;
    }

    CapacitorMap instance = CapacitorMapRegistry.getMap(mapId);
    if (instance == null) {
      call.reject("Map id not found!");
      return;
    }

    try {
      event.handle(instance);

      if (resolve) {
        call.resolve();
      }
    } catch (Exception e) {
      e.fillInStackTrace();

      call.reject(e.getMessage());
    }
  }

  public void runOnUiThread(Runnable handle) {
    this.plugin.runOnUiThread(handle);
  }
}
