package de.ngloader.plugins.maplibre.map;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;

import org.maplibre.android.camera.CameraPosition;
import org.maplibre.android.camera.CameraUpdate;
import org.maplibre.android.camera.CameraUpdateFactory;

import de.ngloader.plugins.maplibre.util.CapacitorLatLng;
import de.ngloader.plugins.maplibre.util.JSObjectUtil;

public class CapacitorMapCamera extends CapacitorMapExtension {

  CapacitorMapCamera(CapacitorMap instance) {
    super(instance);
  }

  public void handleMoveCamera(PluginCall call) {
    JSObject data = call.getObject("data");
    if (data == null) {
      call.reject("Missing data value!");
      return;
    }

    CameraPosition.Builder builder = new CameraPosition.Builder();

    CapacitorLatLng latlng = new CapacitorLatLng(data.getJSObject("center"));
    if (latlng.isValid()) {
      builder.target(latlng.toMaplibre());
    }

    JSObjectUtil.handleDouble(call, "data.zoom", builder::zoom);
    JSObjectUtil.handleDouble(call, "data.bearing", builder::bearing);
    JSObjectUtil.handleDouble(call, "data.pitch", builder::tilt);

    Boolean animate = JSObjectUtil.getBoolean(call, "data.animate", true);
    Integer duration = JSObjectUtil.getInteger(call, "data.duration", 800);

    this.runOnUiThread(() -> {
      CameraPosition cameraPosition = builder.build();
      if (animate != null && animate) {
        CameraUpdate update = CameraUpdateFactory.newCameraPosition(cameraPosition);
        this.getMap().animateCamera(update, duration);
      } else {
        this.getMap().setCameraPosition(cameraPosition);
      }
    });
  }

  public void handleZoomCamera(PluginCall call) {
    CameraPosition.Builder builder = new CameraPosition.Builder();

    JSObjectUtil.handleDouble(call, "zoom", builder::zoom);
    Boolean animate = JSObjectUtil.getBoolean(call, "options.animate", true);
    Integer duration = JSObjectUtil.getInteger(call, "options.duration", 800);

    this.runOnUiThread(() -> {
      CameraPosition cameraPosition = builder.build();
      if (animate != null && animate) {
        CameraUpdate update = CameraUpdateFactory.newCameraPosition(cameraPosition);
        this.getMap().animateCamera(update, duration);
      } else {
        this.getMap().setCameraPosition(cameraPosition);
      }
    });
  }
}
