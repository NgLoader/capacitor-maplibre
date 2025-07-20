package de.ngloader.plugins.maplibre.map;

import android.graphics.Paint;

import com.getcapacitor.JSObject;

import org.maplibre.android.maps.MapView;

import java.util.function.Consumer;

import de.ngloader.plugins.maplibre.CapacitorMaplibrePlugin;

public class CapacitorMapListener extends CapacitorMapExtension implements
  MapView.OnDidFinishLoadingMapListener,
  MapView.OnCameraDidChangeListener,
  MapView.OnCameraIsChangingListener,
  MapView.OnCameraWillChangeListener {

  private final CapacitorMaplibrePlugin plugin;
  private final String mapId;

  CapacitorMapListener(CapacitorMap instance) {
    super(instance);
    this.plugin = instance.getPlugin();
    this.mapId = instance.getMapId();
  }

  public void initialize() {
    MapView mapView = this.instance.getMapView();
    mapView.addOnDidFinishLoadingMapListener(this);
    mapView.addOnCameraIsChangingListener(this);
    mapView.addOnCameraDidChangeListener(this);
  }

  @Override
  public void onDidFinishLoadingMap() {
    this.callEvent(CapacitorMapEventType.LOAD);
  }

  @Override
  public void onCameraDidChange(boolean b) {
    this.callCameraMove(CapacitorMapEventType.MOVE_END);
  }

  @Override
  public void onCameraIsChanging() {
    this.callCameraMove(CapacitorMapEventType.MOVE);
  }

  @Override
  public void onCameraWillChange(boolean b) {
    this.callCameraMove(CapacitorMapEventType.MOVE_START);
  }

  public void callCameraMove(CapacitorMapEventType type) {
    this.callEvent(type, data -> {
      // TODO provide camera data
    });
  }

  public void callEvent(CapacitorMapEventType eventType) {
    this.callEvent(eventType, (data) -> { });
  }

  public void callEvent(CapacitorMapEventType eventType, Consumer<JSObject> dataConsumer) {
    JSObject data = new JSObject();
    dataConsumer.accept(data);
    data.put("mapId", this.mapId);
    this.plugin.notifyPluginListeners(eventType.getIdentifier(), data);
  }
}
