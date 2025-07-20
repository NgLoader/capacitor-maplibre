package de.ngloader.plugins.maplibre.util;

import com.getcapacitor.JSObject;

import org.json.JSONObject;
import org.maplibre.android.geometry.LatLngBounds;

public class CapacitorLatLngBounds {

  public Double latNorth;
  public Double lngEast;
  public Double latSouth;
  public Double lngWest;

  public CapacitorLatLngBounds(JSObject json) {
    this.updateFromJson(json);
  }

  public void updateFromJson(JSObject json) {
    if (json.has("latNorth")) {
      this.latNorth = json.optDouble("latNorth", 0);
    }
    if (json.has("lngEast")) {
      this.lngEast = json.optDouble("lngEast", 0);
    }
    if (json.has("latSouth")) {
      this.latSouth = json.optDouble("latSouth", 0);
    }
    if (json.has("lngWest")) {
      this.lngWest = json.optDouble("lngWest", 0);
    }
  }

  public JSONObject toJson() {
    JSObject result = new JSObject();
    result.put("latNorth", this.latNorth);
    result.put("lngEast", this.lngEast);
    result.put("latSouth", this.latSouth);
    result.put("lngWest", this.lngWest);
    return result;
  }

  public LatLngBounds toMaplibre() {
    return new LatLngBounds(this.latNorth, this.lngEast, this.latSouth, this.lngWest);
  }

  public boolean isValid() {
    return this.latNorth != null && this.lngEast != null && this.latSouth != null && this.lngWest != null;
  }
}
