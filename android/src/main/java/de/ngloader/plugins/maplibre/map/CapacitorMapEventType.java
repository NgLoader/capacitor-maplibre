package de.ngloader.plugins.maplibre.map;

public enum CapacitorMapEventType {
  BOX_ZOOM_CANCEL("boxzoomcancel"),
  BOX_ZOOM_END("boxzoomend"),
  BOX_ZOOM_START("boxzoomstart"),
  CLICK("click"),
  CONTEXT_MENU("contextmenu"),
  DATA("data"),
  DATA_ABORT("dataabort"),
  DATA_LOADING("dataloading"),
  DBL_CLICK("dblclick"),
  DRAG("drag"),
  DRAG_END("dragend"),
  DRAG_START("dragstart"),
  ERROR("error"),
  IDLE("idle"),
  LOAD("load"),
  MOUSE_DOWN("mousedown"),
  MOUSE_MOVE("mousemove"),
  MOUSE_OUT("mouseout"),
  MOUSE_OVER("mouseover"),
  MOUSE_UP("mouseup"),
  MOVE("move"),
  MOVE_END("moveend"),
  MOVE_START("movestart"),
  PITCH("pitch"),
  PITCH_END("pitchend"),
  PITCH_START("pitchstart"),
  READY("ready"),
  RESIZE("resize"),
  ROTATE("rotate"),
  ROTATE_END("rotateend"),
  ROTATE_START("rotatestart"),
  SOURCE_DATA("sourcedata"),
  SOURCE_DATA_ABORT("sourcedataabort"),
  SOURCE_DATA_LOADING("sourcedataloading"),
  STYLE_DATA("styledata"),
  STYLE_DATA_LOADING("styledataloading"),
  STYLE_DATA_MISSING("styleimagemissing"),
  TERRAIN("terrain"),
  TILE_DATA_LOADING("tiledataloading"),
  TOUCH_CANCEL("touchcancel"),
  TOUCH_END("touchend"),
  TOUCH_MOVE("touchmove"),
  TOUCH_START("touchstart"),
  WEB_GL_CONTEXT_LOST("webglcontextlost"),
  WEB_GL_CONTEXT_RESTORED("webglcontextrestored"),
  WHEEL("wheel"),
  ZOOM("zoom"),
  ZOOM_END("zoomend"),
  ZOOM_START("zoomstart");

  private String identifier;

  private CapacitorMapEventType(String identifier) {
    this.identifier = identifier;
  }

  public String getIdentifier() {
    return this.identifier;
  }
}
