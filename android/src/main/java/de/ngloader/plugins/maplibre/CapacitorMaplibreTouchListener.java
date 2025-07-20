package de.ngloader.plugins.maplibre;

import android.annotation.SuppressLint;
import android.graphics.Rect;
import android.view.MotionEvent;
import android.view.View;
import android.webkit.WebView;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;

import de.ngloader.plugins.maplibre.map.CapacitorMap;
import de.ngloader.plugins.maplibre.map.CapacitorMapRegistry;

public class CapacitorMaplibreTouchListener implements View.OnTouchListener {

  private final CapacitorMaplibrePlugin plugin;

  CapacitorMaplibreTouchListener(CapacitorMaplibrePlugin plugin) {
    this.plugin = plugin;
  }

  public void handleMapEvent(PluginCall call) {
    String mapId = call.getString("mapId");
    CapacitorMap map = CapacitorMapRegistry.getMap(mapId);
    if (map == null) {
      call.reject("Invalid map id!");
      return;
    }

    this.plugin.runOnUiThread(() -> {
      WebView webView = this.plugin.getBridge().getWebView();
      boolean focus = Boolean.TRUE.equals(call.getBoolean("focus", false));
      for (MotionEvent event : map.getTouchEvents()) {
        if (focus) {
          this.dispatchTouchEvent(map, event);
        } else {
          webView.onTouchEvent(event);
        }
      }
      map.clearTouchEvent();
    });
  }

  @SuppressLint("ClickableViewAccessibility")
  @Override
  public boolean onTouch(View v, MotionEvent event) {
    if (event != null) {
      if (event.getSource() == -1) {
        return v.onTouchEvent(event);
      }

      int touchX = (int) event.getX();
      int touchY = (int) event.getY();

      for (CapacitorMap map : CapacitorMapRegistry.getMaps()) {
        Rect mapRect = map.getMapBounds();
        if (mapRect.contains(touchX, touchY)) {
          map.clearTouchEvent();

          @SuppressLint("Recycle") MotionEvent motionEvent = MotionEvent.obtain(event);
          map.addTouchEvent(event);

          JSObject result = new JSObject();
          result.put("x", touchX / map.getPixelRatio());
          result.put("y", touchY / map.getPixelRatio());
          result.put("mapId", map.getMapId());

          this.plugin.notifyPluginListeners("isMapInFocus", result);
          return true;
        }
      }
    }

    return v.onTouchEvent(event);
  }

  private void dispatchTouchEvent(CapacitorMap map, MotionEvent event) {
    Rect bounds = map.getMapBounds();
    float relativeTop = bounds.top;
    float relativeLeft = bounds.left;

    event.setLocation(event.getX() - relativeLeft, event.getY() - relativeTop);
    map.getMapView().dispatchTouchEvent(event);
  }
}
