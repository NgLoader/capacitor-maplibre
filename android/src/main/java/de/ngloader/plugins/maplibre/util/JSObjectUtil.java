package de.ngloader.plugins.maplibre.util;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;

import org.json.JSONException;

import java.util.function.Consumer;
import java.util.function.Function;

public class JSObjectUtil {

  // Int
  public static Integer getInteger(PluginCall call, String name) {
    return JSObjectUtil.get(call, name, null, Integer.class);
  }

  public static Integer getInteger(PluginCall call, String name, Integer standard) {
    return JSObjectUtil.get(call, name, standard, Integer.class);
  }

  public static void handleInteger(PluginCall call, String name, Consumer<Integer> handle) {
    JSObjectUtil.handle(call, name, null, Integer.class, handle);
  }

  public static void handleInteger(PluginCall call, String name, Integer standard, Consumer<Integer> handle) {
    JSObjectUtil.handle(call, name, standard, Integer.class, handle);
  }

  // Double
  public static Double getDouble(PluginCall call, String name) {
    return JSObjectUtil.get(call, name, null, Double.class);
  }

  public static Double getDouble(PluginCall call, String name, Double standard) {
    return JSObjectUtil.get(call, name, standard, Double.class);
  }

  public static void handleDouble(PluginCall call, String name, Consumer<Double> handle) {
    JSObjectUtil.handle(call, name, null, Double.class, handle);
  }

  public static void handleDouble(PluginCall call, String name, Double standard, Consumer<Double> handle) {
    JSObjectUtil.handle(call, name, standard, Double.class, handle);
  }

  // Float
  public static Float getFloat(PluginCall call, String name) {
    return JSObjectUtil.get(call, name, null, Float.class);
  }

  public static Float getFloat(PluginCall call, String name, Float standard) {
    return JSObjectUtil.get(call, name, standard, Float.class);
  }

  public static void handleFloat(PluginCall call, String name, Consumer<Float> handle) {
    JSObjectUtil.handle(call, name, null, Float.class, handle);
  }

  public static void handleFloat(PluginCall call, String name, Float standard, Consumer<Float> handle) {
    JSObjectUtil.handle(call, name, standard, Float.class, handle);
  }

  // Boolean
  public static Boolean getBoolean(PluginCall call, String name) {
    return JSObjectUtil.get(call, name, null, Boolean.class);
  }

  public static Boolean getBoolean(PluginCall call, String name, Boolean standard) {
    return JSObjectUtil.get(call, name, standard, Boolean.class);
  }

  public static void handleBoolean(PluginCall call, String name, Consumer<Boolean> handle) {
    JSObjectUtil.handle(call, name, null, Boolean.class, handle);
  }

  public static void handleBoolean(PluginCall call, String name, Boolean standard, Consumer<Boolean> handle) {
    JSObjectUtil.handle(call, name, standard, Boolean.class, handle);
  }

  // String
  public static String getString(PluginCall call, String name) {
    return JSObjectUtil.get(call, name, null, String.class);
  }

  public static String getString(PluginCall call, String name, String standard) {
    return JSObjectUtil.get(call, name, standard, String.class);
  }

  public static void handleString(PluginCall call, String name, Consumer<String> handle) {
    JSObjectUtil.handle(call, name, null, String.class, handle);
  }

  public static void handleString(PluginCall call, String name, String standard, Consumer<String> handle) {
    JSObjectUtil.handle(call, name, standard, String.class, handle);
  }

  public static <T> T get(PluginCall call, String name, T standard, Class<T> mapClass) {
    try {
      JSObject data = getParentJSObject(call.getData(), name);
      if (data != null && data.has(name)) {
        Object value = data.get(name);

        if (mapClass.isAssignableFrom(value.getClass())) {
          return mapClass.cast(value);
        }
      }
    } catch (JSONException e) {
      call.reject(e.getMessage(), e);
    }
    return null;
  }

  public static <T> void handle(PluginCall call, String name, T standard, Class<T> mapClass, Consumer<T> handle) {
    try {
      JSObject data = getParentJSObject(call.getData(), name);
      if (data != null && data.has(name)) {
        Object value = data.get(name);

        if (mapClass.isAssignableFrom(value.getClass())) {
          handle.accept(mapClass.cast(value));
        }
      }

      if (standard != null) {
        handle.accept(standard);
      }
    } catch (JSONException e) {
      call.reject(e.getMessage(), e);
    }
  }

  private static JSObject getParentJSObject(JSObject data, String key) {
    String[] keys = key.split("\\.");
    JSObject parent = data;
    for (int i = 0; i < keys.length - 1; i++) {
      String entryKey = keys[i];
      if (parent != null && parent.has(entryKey)) {
        parent = parent.getJSObject(entryKey);
        continue;
      }

      return null;
    }

    return parent;
  }
}
