package de.ngloader.plugins.maplibre.util;

import com.getcapacitor.JSObject;

import org.json.JSONObject;
import org.maplibre.android.geometry.LatLng;
import org.maplibre.android.geometry.LatLngBounds;

public class CapacitorLatLng {

  public Double lng;
  public Double lat;

  public CapacitorLatLng(JSObject json) {
    this.updateFromJson(json);
  }

  public void updateFromJson(JSObject json) {
    if (json != null) {
      if (json.has("lng")) {
        this.lng = json.optDouble("lng", 0);
      }
      if (json.has("lat")) {
        this.lat = json.optDouble("lat", 0);
      }
    }
  }

  public JSONObject toJson() {
    JSObject result = new JSObject();
    result.put("lng", this.lng);
    result.put("lat", this.lat);
    return result;
  }

  public LatLng toMaplibre() {
    return new LatLng(this.lat, this.lng);
  }

  public boolean isValid() {
    return this.lng != null && this.lat != null;
  }
}
