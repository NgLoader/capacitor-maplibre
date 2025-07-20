package de.ngloader.plugins.maplibre.map;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;

import org.maplibre.android.maps.Style;
import org.maplibre.android.style.expressions.Expression;
import org.maplibre.android.style.layers.CircleLayer;
import org.maplibre.android.style.layers.FillLayer;
import org.maplibre.android.style.layers.Layer;
import org.maplibre.android.style.layers.LayoutPropertyValue;
import org.maplibre.android.style.layers.LineLayer;
import org.maplibre.android.style.layers.PaintPropertyValue;
import org.maplibre.android.style.layers.PropertyValue;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import de.ngloader.plugins.maplibre.util.MaplibreUtil;

public class CapacitorMapLayer extends CapacitorMapExtension {

  CapacitorMapLayer(CapacitorMap instance) {
    super(instance);
  }

  public void handleAddLayer(PluginCall call) {
    String layerId = call.getString("id", null);
    if (layerId == null) {
      return;
    }

    String type = call.getString("type", null);
    if (type == null) {
      return;
    }

    String sourceId = call.getString("source", null);
    if (sourceId == null) {
      return;
    }

    String sourceLayer = call.getString("source-layer", null);

    Float minZoom = call.getFloat("minZoom", null);
    Float maxZoom = call.getFloat("maxZoom", null);

    JSArray filter = call.getArray("filter", null);

    JSObject paint = call.getObject("paint", null);
    JSObject layout = call.getObject("layout", null);

    this.runOnUiThread(() -> {
      Style style = this.getMap().getStyle();
      if (style == null) {
        return;
      }

      Layer layer = null;
      switch (type) {
        case "line":
          LineLayer lineLayer = new LineLayer(layerId, sourceId);
          layer = lineLayer;

          if (sourceLayer != null) {
            lineLayer.withSourceLayer(sourceLayer);
          }

          if (filter != null) {
            lineLayer.withFilter(Expression.raw(filter.toString()));
          }
          break;

        case "fill":
          FillLayer fillLayer = new FillLayer(layerId, sourceId);
          layer = fillLayer;

          if (sourceLayer != null) {
            fillLayer.withSourceLayer(sourceLayer);
          }

          if (filter != null) {
            fillLayer.withFilter(Expression.raw(filter.toString()));
          }
          break;

        case "circle":
          CircleLayer circleLayer = new CircleLayer(layerId, sourceId);
          layer = circleLayer;

          if (sourceLayer != null) {
            circleLayer.withSourceLayer(sourceLayer);
          }

          if (filter != null) {
            circleLayer.withFilter(Expression.raw(filter.toString()));
          }
          break;

        default:
          throw new IllegalArgumentException("Layer type " + type + " is not supported!");
      }

      if (minZoom != null) {
        layer.setMaxZoom(minZoom);
      }
      if (maxZoom != null) {
        layer.setMaxZoom(maxZoom);
      }

      layer.setProperties(MaplibreUtil.jsonToProperties(paint, layout));
      style.addLayer(layer);
    });
  }

  public void handleUpdateLayer(PluginCall call) {
    this.handleAddLayer(call);
  }

  public void handleSetLayerProperties(PluginCall call) {
    String layerId = call.getString("layerId", null);
    if (layerId == null) {
      return;
    }

    JSObject paint = call.getObject("paint", null);
    JSObject layout = call.getObject("layout", null);

    if (paint == null && layout == null) {
      return;
    }

    this.runOnUiThread(() -> {
      Style style = this.getMap().getStyle();
      if (style != null) {
         Layer layer = style.getLayer(layerId);
         if (layer == null) {
           return;
         }

         PropertyValue<?>[] properties = MaplibreUtil.jsonToProperties(paint, layout);
         if (layer instanceof LineLayer lineLayer) {
           lineLayer.withProperties(properties);
         } else if (layer instanceof FillLayer fillLayer) {
           fillLayer.withProperties(properties);
         } else if (layer instanceof CircleLayer circleLayer) {
           circleLayer.withProperties(properties);
         } else {
           throw new IllegalArgumentException(String.format("Layer type %s for sourceId %s is not supported!",
             layer.getClass().getSimpleName(),
             layerId));
         }
      }
    });
  }

  public void handleMoveLayer(PluginCall call) {
    // TODO WIP
  }

  public void handleRemoveLayer(PluginCall call) {
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
