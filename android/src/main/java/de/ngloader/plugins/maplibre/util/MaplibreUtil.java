package de.ngloader.plugins.maplibre.util;

import com.getcapacitor.JSObject;

import org.maplibre.android.style.layers.Layer;
import org.maplibre.android.style.layers.LayoutPropertyValue;
import org.maplibre.android.style.layers.PaintPropertyValue;
import org.maplibre.android.style.layers.PropertyValue;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class MaplibreUtil {

  public static PaintPropertyValue<?>[] jsonToPaintProperties(JSObject paint) {
    if (paint == null) {
      return new PaintPropertyValue<?>[0];
    }

    List<PaintPropertyValue<?>> properties = new ArrayList<>();

    Iterator<String> paints = paint.keys();
    while (paints.hasNext()) {
      String key = paints.next();
      String value = paint.getString(key, null);
      if (value == null) {
        continue;
      }

      PaintPropertyValue<String> paintPropertyValue = new PaintPropertyValue<>(key, value);
      properties.add(paintPropertyValue);
    }

    PaintPropertyValue<?>[] propertiesArray = new PaintPropertyValue[properties.size()];
    for (int i = 0; i < properties.size(); i++) {
      propertiesArray[i] = properties.get(i);
    }
    return propertiesArray;
  }

  public static LayoutPropertyValue<?>[] jsonToLayoutProperties(JSObject layout) {
    if (layout == null) {
      return new LayoutPropertyValue<?>[0];
    }

    List<LayoutPropertyValue<?>> properties = new ArrayList<>();

    Iterator<String> paints = layout.keys();
    while (paints.hasNext()) {
      String key = paints.next();
      String value = layout.getString(key, null);
      if (value == null) {
        continue;
      }

      LayoutPropertyValue<String> paintPropertyValue = new LayoutPropertyValue<>(key, value);
      properties.add(paintPropertyValue);
    }

    LayoutPropertyValue<?>[] propertiesArray = new LayoutPropertyValue[properties.size()];
    for (int i = 0; i < properties.size(); i++) {
      propertiesArray[i] = properties.get(i);
    }
    return propertiesArray;
  }

  public static PropertyValue<?>[] jsonToProperties(JSObject paint, JSObject layout) {
    List<PropertyValue<?>> properties = new ArrayList<>();
    properties.addAll(List.of(jsonToPaintProperties(paint)));
    properties.addAll(List.of(jsonToLayoutProperties(layout)));

    PropertyValue<?>[] propertiesArray = new PropertyValue[properties.size()];
    for (int i = 0; i < properties.size(); i++) {
      propertiesArray[i] = properties.get(i);
    }
    return propertiesArray;
  }
}
