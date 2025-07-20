package de.ngloader.plugins.maplibre;

import android.Manifest;
import android.annotation.SuppressLint;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;

import org.maplibre.android.MapLibre;

import de.ngloader.plugins.maplibre.map.CapacitorMapRegistry;

@CapacitorPlugin(
  name = "CapacitorMaplibreDISABLE",
  permissions = {
    @Permission(
      strings = { Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION },
      alias = "location"
    ),
  }
)
public class CapacitorMaplibrePlugin extends Plugin {

  private final CapacitorMaplibreMethod pluginMethod = new CapacitorMaplibreMethod(this);
  private final CapacitorMaplibreTouchListener touchListener = new CapacitorMaplibreTouchListener(this);

  @SuppressLint("ClickableViewAccessibility")
  @Override
  public void load() {
    super.load();

    // Initialize handler
    this.pluginMethod.initialize();

    // TODO need some changes inside capacitor android bridge to work
    // Register plugin methods
    // PluginUtil.registerMethodClass(this.getPluginHandle(), this.pluginMethod);

    // Initialize maplibre
    MapLibre.getInstance(this.getContext());

    this.getBridge().getWebView().setOnTouchListener(touchListener);
  }

  @PluginMethod
  public void dispatchMapEvent(PluginCall call) {
    this.pluginMethod.dispatchMapEvent(call);
  }

  @PluginMethod
  public void createMap(PluginCall call) {
    this.pluginMethod.createMap(call);
  }

  @PluginMethod
  public void updateMap(PluginCall call) {
    this.pluginMethod.updateMap(call);
  }

  @PluginMethod
  public void removeMap(PluginCall call) {
    this.pluginMethod.removeMap(call);
  }

  @PluginMethod
  public void setStyle(PluginCall call) {
    this.pluginMethod.setStyle(call);
  }

  @PluginMethod
  public void moveCamera(PluginCall call) {
    this.pluginMethod.moveCamera(call);
  }

  @PluginMethod
  public void zoomTo(PluginCall call) {
    this.pluginMethod.zoomTo(call);
  }

  @PluginMethod
  public void queryRenderedFeatures(PluginCall call) {
    this.pluginMethod.queryRenderedFeatures(call);
  }

  @PluginMethod
  public void addLayer(PluginCall call) {
    this.pluginMethod.addLayer(call);
  }

  @PluginMethod
  public void updateLayer(PluginCall call) {
    this.pluginMethod.updateLayer(call);
  }

  @PluginMethod
  public void setLayerProperties(PluginCall call) {
    this.pluginMethod.setLayerProperties(call);
  }

  @PluginMethod
  public void moveLayer(PluginCall call) {
    this.pluginMethod.moveLayer(call);
  }

  @PluginMethod
  public void removeLayer(PluginCall call) {
    this.pluginMethod.removeLayer(call);
  }

  @PluginMethod
  public void addSource(PluginCall call) {
    this.pluginMethod.addSource(call);
  }

  @PluginMethod
  public void updateSource(PluginCall call) {
    this.pluginMethod.updateSource(call);
  }

  @PluginMethod
  public void removeSource(PluginCall call) {
    this.pluginMethod.removeSource(call);
  }

  @PluginMethod
  public void addMarker(PluginCall call) {
  }

  @PluginMethod
  public void updateMarker(PluginCall call) {
  }

  @PluginMethod
  public void removeMarker(PluginCall call) {
  }

  @PluginMethod
  public void onScroll(PluginCall call) {
    this.pluginMethod.onScroll(call);
  }

  @PluginMethod
  public void onResize(PluginCall call) {
    this.pluginMethod.onResize(call);
  }

  @PluginMethod
  public void onDisplay(PluginCall call) {
    this.pluginMethod.onDisplay(call);
  }

  public void runOnUiThread(Runnable action) {
    this.getActivity().runOnUiThread(action);
  }

  @Override
  public void handleOnStart() {
    super.handleOnStart();
    CapacitorMapRegistry.handleOnStart();
  }

  @Override
  public void handleOnResume() {
    super.handleOnResume();
    CapacitorMapRegistry.handleOnResume();
  }

  @Override
  public void handleOnPause() {
    super.handleOnPause();
    CapacitorMapRegistry.handleOnPause();
  }

  @Override
  public void handleOnStop() {
    super.handleOnStop();
    CapacitorMapRegistry.handleOnStop();
  }

  @Override
  public void handleOnDestroy() {
    CapacitorMapRegistry.handleOnDestroy();
    super.handleOnDestroy();
  }

  public void notifyPluginListeners(String eventName, JSObject data) {
    this.notifyListeners(eventName, data);
  }

  public CapacitorMaplibreMethod getPluginMethod() {
    return this.pluginMethod;
  }

  public CapacitorMaplibreTouchListener getTouchListener() {
    return this.touchListener;
  }
}
