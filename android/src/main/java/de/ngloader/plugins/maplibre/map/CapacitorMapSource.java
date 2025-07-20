package de.ngloader.plugins.maplibre.map;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;

import org.maplibre.android.maps.Style;
import org.maplibre.android.style.sources.GeoJsonSource;
import org.maplibre.android.style.sources.Source;

public class CapacitorMapSource extends CapacitorMapExtension {

  CapacitorMapSource(CapacitorMap instance) {
    super(instance);
  }

  public void handleAddSource(PluginCall call) {
    String sourceId = call.getString("sourceId", null);
    if (sourceId == null) {
      return;
    }

    String geojson = call.getString("geojson", null);
    if (geojson == null) {
      return;
    }

    this.runOnUiThread(() -> {
      Style style = this.getMap().getStyle();
      if (style != null) {
        Source oldSource = style.getSource(sourceId);
        if (oldSource instanceof GeoJsonSource geoSource) {
          // update existing data
          geoSource.setGeoJson(geojson);
          return;
        }

        // remove old source
        if (oldSource != null) {
          style.removeSource(oldSource);
        }

        // add new source
        GeoJsonSource source = new GeoJsonSource(sourceId);
        source.setGeoJson(geojson);
        style.addSource(source);
      }
    });
  }

  public void handleUpdateSource(PluginCall call) {
  }

  public void handleRemoveSource(PluginCall call) {
    String sourceId = call.getString("sourceId", null);
    if (sourceId == null) {
      return;
    }

    this.runOnUiThread(() -> {
      Style style = this.getMap().getStyle();
      if (style != null) {
        style.removeSource(sourceId);
      }
    });
  }
}
