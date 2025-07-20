package de.ngloader.plugins.maplibre.util;

import com.getcapacitor.PluginHandle;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.PluginMethodHandle;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class PluginUtil {

  public static Map<String, PluginMethodHandle> getPluginMethod(PluginHandle handle) {
    Map<String, PluginMethodHandle> pluginMethods = null;
    try {
      Field field = handle.getClass().getDeclaredField("pluginMethods");
      field.setAccessible(true);
      pluginMethods = (Map<String, PluginMethodHandle>) field.get(handle);
    } catch (Exception e) {
      e.fillInStackTrace();
    }
    return pluginMethods;
  }

  // TODO fix capacitorjs plugin method registry
  public static void registerMethodClass(PluginHandle handle, Object instance) {
    Map<String, PluginMethodHandle> pluginMethods = getPluginMethod(handle);
    if (pluginMethods == null) {
      // TODO handle exception
      return;
    }

    for (Method method : instance.getClass().getMethods()) {
      PluginMethod annotation = method.getAnnotation(PluginMethod.class);
      if (annotation == null) {
        continue;
      }

      PluginMethodHandle methodHandle = new PluginMethodHandle(method, annotation);
      pluginMethods.put(method.getName(), methodHandle);
    }
  }
}
