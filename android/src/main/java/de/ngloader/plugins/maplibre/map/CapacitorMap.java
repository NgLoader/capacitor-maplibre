package de.ngloader.plugins.maplibre.map;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.RectF;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.FrameLayout;

import com.getcapacitor.Bridge;
import com.getcapacitor.PluginCall;

import org.maplibre.android.maps.MapLibreMap;
import org.maplibre.android.maps.MapView;
import org.maplibre.android.maps.Style;

import java.util.ArrayList;
import java.util.List;

import de.ngloader.plugins.maplibre.CapacitorMaplibrePlugin;
import de.ngloader.plugins.maplibre.util.CapacitorMapEvent;

public class CapacitorMap {

  private final CapacitorMaplibrePlugin plugin;

  private final MapView mapView;

  private final String mapId;
  private final float pixelRatio;

  private final CapacitorMapListener listener;
  private final CapacitorMapCamera camera;
  private final CapacitorMapSource source;
  private final CapacitorMapLayer layer;

  private final List<MotionEvent> touchEventList = new ArrayList<>();

  private MapLibreMap map;

  private int elementWidth;
  private int elementHeight;
  private int elementX;
  private int elementY;

  private CapacitorMapEvent mapReadyEvent;

  @SuppressLint("ClickableViewAccessibility")
  CapacitorMap(CapacitorMaplibrePlugin plugin, String mapId, int width, int height, int x, int y, float pixelRatio, CapacitorMapEvent mapReady) {
    this.plugin = plugin;
    this.mapId = mapId;
    this.elementWidth = width;
    this.elementHeight = height;
    this.elementX = x;
    this.elementY = y;
    this.pixelRatio = pixelRatio;
    this.mapReadyEvent = mapReady;

    this.mapView = new MapView(this.plugin.getContext());
    this.addToView();

    this.mapView.onCreate(null);
    this.mapView.onStart();

    this.listener = new CapacitorMapListener(this);
    this.camera = new CapacitorMapCamera(this);
    this.source = new CapacitorMapSource(this);
    this.layer = new CapacitorMapLayer(this);

    this.listener.initialize();

    this.mapView.getMapAsync(this::onMapReady);
  }

  private void onMapReady(MapLibreMap map) {
    this.map = map;

    // disable ui
    map.getUiSettings().setLogoEnabled(false);
    map.getUiSettings().setCompassEnabled(false);
    map.getUiSettings().setAttributionEnabled(false);

    this.runOnUiThread(() -> {
      if (this.mapReadyEvent != null) {
        this.mapReadyEvent.handle(this);
        this.mapReadyEvent = null;
      }
    });
  }

  public void addToView() {
    this.runOnUiThread(() -> {
      Bridge bridge = this.plugin.getBridge();
      WebView webView = bridge.getWebView();
      FrameLayout mapViewParent = new FrameLayout(bridge.getContext());
      mapViewParent.setMinimumWidth(webView.getWidth());
      mapViewParent.setMinimumHeight(webView.getHeight());

      FrameLayout.LayoutParams layoutParameters = new FrameLayout.LayoutParams(
        this.getScaledPixels(bridge, this.elementWidth),
        this.getScaledPixels(bridge, this.elementHeight)
      );
      layoutParameters.leftMargin = getScaledPixels(bridge, this.elementX);
      layoutParameters.topMargin = getScaledPixels(bridge, this.elementY);

      mapViewParent.setTag(this.mapId);

      mapView.setLayoutParams(layoutParameters);
      mapViewParent.addView(mapView);

      // add view
      ((ViewGroup) webView.getParent()).addView(mapViewParent);

      // set background transparent
      webView.bringToFront();
      webView.setBackgroundColor(Color.TRANSPARENT);
      webView.loadUrl("javascript:document.documentElement.style.backgroundColor = 'transparent';void(0);");
    });
  }

  public void updateView(RectF bounds) {
    if (bounds == null) {
      return;
    }

    this.elementWidth = (int) bounds.width();
    this.elementHeight = (int) bounds.height();
    this.elementX = (int) bounds.left;
    this.elementY = (int) bounds.right;

    Bridge bridge = this.plugin.getBridge();
    RectF mapRect = this.getScaledRect(bridge, bounds);
    this.mapView.setX(mapRect.left);
    this.mapView.setY(mapRect.top);

    ViewGroup.LayoutParams layoutParams = mapView.getLayoutParams();
    if (layoutParams.width != this.elementWidth || layoutParams.height != this.elementHeight) {
      layoutParams.width = this.getScaledPixels(bridge, this.elementWidth);
      layoutParams.height = this.getScaledPixels(bridge, this.elementHeight);
      this.mapView.setLayoutParams(layoutParams);
    }
  }

  public void removeFromView() {
    this.runOnUiThread(() -> {
      Bridge bridge = this.plugin.getBridge();
      ViewGroup webViewParent = (ViewGroup) bridge.getWebView().getParent();
      View view = webViewParent.findViewWithTag(this.mapId);
      if (view != null) {
        webViewParent.removeView(view);
      }
    });
  }

  public Rect getMapBounds() {
    Bridge bridge = this.plugin.getBridge();
    return new Rect(
      this.getScaledPixels(bridge, this.elementX),
      this.getScaledPixels(bridge, this.elementY),
      this.getScaledPixels(bridge, this.elementX + this.elementWidth),
      this.getScaledPixels(bridge, this.elementY + this.elementHeight)
    );
  }

  public int getScaledPixels(Bridge bridge, int pixels) {
    float scale = bridge.getActivity().getResources().getDisplayMetrics().density;
    return (int) (pixels * scale + 0.5F);
  }

  public float getScaledPixelsF(Bridge bridge, float pixels) {
    float scale = bridge.getActivity().getResources().getDisplayMetrics().density;
    return (pixels * scale + 0.5F);
  }

  public RectF getScaledRect(Bridge bridge, RectF rectF) {
    return new RectF(
      getScaledPixelsF(bridge, rectF.left),
      getScaledPixelsF(bridge, rectF.top),
      getScaledPixelsF(bridge, rectF.right),
      getScaledPixelsF(bridge, rectF.bottom)
    );
  }

  public void handleStyle(PluginCall call) {
    String style = call.getString("style");
    if (style == null) {
      return;
    }

    this.runOnUiThread(() -> {
      this.map.setStyle(new Style.Builder().fromJson(style));
    });
  }

  public void handleUpdateMap(PluginCall call) {

  }

  public boolean hasTouchEvent() {
    return !this.touchEventList.isEmpty();
  }

  public void clearTouchEvent() {
    this.touchEventList.clear();
  }

  public void addTouchEvent(MotionEvent event) {
    this.touchEventList.add(event);
  }

  public List<MotionEvent> getTouchEvents() {
    return this.touchEventList;
  }

  public int getElementWidth() {
    return this.elementWidth;
  }

  public int getElementHeight() {
    return this.elementHeight;
  }

  public int getElementX() {
    return this.elementX;
  }

  public int getElementY() {
    return this.elementY;
  }

  public float getPixelRatio() {
    return this.pixelRatio;
  }

  public void destroy() {
    this.removeFromView();
  }

  public void runOnUiThread(Runnable handle) {
    this.plugin.runOnUiThread(handle);
  }

  public CapacitorMapListener getListener() {
    return this.listener;
  }

  public CapacitorMapCamera getCamera() {
    return this.camera;
  }

  public CapacitorMapSource getSource() {
    return this.source;
  }

  public CapacitorMapLayer getLayer() {
    return this.layer;
  }

  public MapLibreMap getMap() {
    return this.map;
  }

  public MapView getMapView() {
    return this.mapView;
  }

  public String getMapId() {
    return this.mapId;
  }

  public CapacitorMaplibrePlugin getPlugin() {
    return this.plugin;
  }
}
