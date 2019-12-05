import { getMapProvider, inheritPrototype } from "../../utils";

let mapProvider = getMapProvider();

/**
 * options
 * mapId            {String}
 * minZoom          {Number}  地图允许展示的最小级别
 * maxZoom          {Number}  地图允许展示的最大级别
 * enableAutoResize {Boolean} 是否自动适应地图容器变化【百度默认启用】【凯立德默认禁用】
 *
 * 百度
 * mapType              {MapType}         地图类型，默认为BMAP_NORMAL_MAP
 * enableHighResolution {Boolean}
 * enableMapClick       {Boolean}         是否开启底图可点功能，默认启用
 *
 * 凯立德
 * viewBounds   Bounds  地图允许展示的可视范围。
 *
 *  */
function Map(options = {}) {
  this.options = options;
}
/**
 * 初始化
 *
 * */
Map.prototype._init = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  var map;

  if (mapProvider == "baidu") {
    map = new BMap.Map(mapId, options);
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.enableScrollWheelZoom();
  } else if (mapProvider == "kld") {
    var point = new Careland.Point(419364916, 143908009);
    var map = new Careland.Map(mapId, point, 15, options);
    map.enableAutoResize();
    map.load();
  }

  window["_" + mapId] = map;
  options && options.success && options.success();
};

/**
 * 销毁
 *
 * */
Map.prototype._destroy = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  window["_" + mapId] = null;
};

/**
 * 启用地图拖拽
 * 百度默认启用
 */
Map.prototype._enableDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].enableDragging();
  } else if (mapProvider == "kld") {
    window["_" + mapId].enableDragging();
  }
};

/**
 * 禁用地图拖拽
 */
Map.prototype._disableDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].disableDragging();
  } else if (mapProvider == "kld") {
    window["_" + mapId].disableDragging();
  }
};

/**
 * 启用滚轮放大缩小
 * 百度默认禁用
 * 凯立德默认启用
 */
Map.prototype._enableScrollWheelZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].enableScrollWheelZoom();
  } else if (mapProvider == "kld") {
    window["_" + mapId].enableScrollWheelZoom();
  }
};

/**
 * 禁用滚轮放大缩小
 */
Map.prototype._disableScrollWheelZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].disableScrollWheelZoom();
  } else if (mapProvider == "kld") {
    window["_" + mapId].disableScrollWheelZoom();
  }
};

/**
 * 启用双击放大，
 * 百度默认启用
 * 凯立德默认启用
 */
Map.prototype._enableDoubleClickZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].enableDoubleClickZoom();
  } else if (mapProvider == "kld") {
    window["_" + mapId].enableDoubleClickZoom();
  }
};

/**
 * 禁用双击放大
 *
 */
Map.prototype._disableDoubleClickZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].disableDoubleClickZoom();
  } else if (mapProvider == "kld") {
    window["_" + mapId].disableDoubleClickZoom();
  }
};

/**
 * 启用键盘操作
 * 百度地图默认禁用
 * 凯立德地图默认启用
 */
Map.prototype._enableKeyboard = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].enableKeyboard();
  } else if (mapProvider == "kld") {
    window["_" + mapId].enableKeyboard();
  }
};

/**
 * 禁用键盘操作
 */
Map.prototype._disableKeyboard = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].disableKeyboard();
  } else if (mapProvider == "kld") {
    window["_" + mapId].disableKeyboard();
  }
};

/**
 * 启用地图惯性拖拽
 * 百度地图默认禁用
 * 凯立德地图默认禁用
 */
Map.prototype._enableInertialDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].enableInertialDragging();
  } else if (mapProvider == "kld") {
    window["_" + mapId].enableInertialDragging();
  }
};

/**
 * 禁用地图惯性拖拽
 */
Map.prototype._disableInertialDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].disableInertialDragging();
  } else if (mapProvider == "kld") {
    window["_" + mapId].disableInertialDragging();
  }
};

/**
 * 启用双指操作缩放
 * 百度默认启用
 * 凯立德默认启用
 */
Map.prototype._enablePinchToZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].enablePinchToZoom();
  } else if (mapProvider == "kld") {
    window["_" + mapId].enablePinchToZoom();
  }
};

/**
 * 禁用双指操作缩放
 */
Map.prototype._disablePinchToZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].disablePinchToZoom();
  } else if (mapProvider == "kld") {
    window["_" + mapId].disablePinchToZoom();
  }
};

/**
 * 启用自动适应容器尺寸变化，
 * 百度默认启用
 * 凯立德默认禁用
 */
Map.prototype._enableAutoResize = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].enableAutoResize();
  } else if (mapProvider == "kld") {
    window["_" + mapId].enableAutoResize();
  }
};

/**
 * 禁用自动适应容器尺寸变化
 */
Map.prototype._disableAutoResize = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].disableAutoResize();
  } else if (mapProvider == "kld") {
    window["_" + mapId].disableAutoResize();
  }
};

/**
 * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
 * @params {String} cursor  参数cursor应符合CSS的cursor属性规范
 */
Map.prototype._setDefaultCursor = function(cursor) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setDefaultCursor(cursor);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setDefaultCursor(cursor);
  }
};

/**
 * 返回地图默认的鼠标指针样式
 * @return String
 */
Map.prototype._getDefaultCursor = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getDefaultCursor();
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getDefaultCursor();
  }
};

/**
 * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
 * @params {String} cursor
 */
Map.prototype._setDraggingCursor = function(cursor) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setDraggingCursor(cursor);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setDraggingCursor(cursor);
  }
};

/**
 * 返回拖拽地图时的鼠标指针样式
 * @return String
 */
Map.prototype._getDraggingCursor = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getDraggingCursor();
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getDraggingCursor();
  }
};

/**
 * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
 * @params {Number} zoom
 */
Map.prototype._setMinZoom = function(zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setMinZoom(zoom);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setMinZoom(zoom);
  }
};

/**
 * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
 * @params {Number} zoom
 */
Map.prototype._setMaxZoom = function(zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setMaxZoom(zoom);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setMaxZoom(zoom);
  }
};

/**
 * 返回地图可视区域，以地理坐标表示
 * @return 	Bounds
 */
Map.prototype._getBounds = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getBounds();
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getBounds();
  }
};

/**
 * 返回地图当前中心点
 * @return Point
 */
Map.prototype._getCenter = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getCenter();
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getCenter();
  }
};

/**
 * 返回两点之间的距离，单位是米
 * @params { Point} start
 * @params { Point} end
 * @return Number
 */
Map.prototype._getDistance = function(start, end) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getDistance(start, end);
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getDistance(start, end);
  }
};

/**
 * 返回地图视图的大小，以像素表示
 * @return Size
 */
Map.prototype._getSize = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getSize();
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getSize();
  }
};

/**
 * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。
 * 此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
 * @params {Array<Point>}       view
 * @params {ViewportOptions}    viewportOptions
 * 
 * ---------------------
 * viewportOptions
 * 百度
 * enableAnimation  Boolean 是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图
 * margins          Array<Number>   视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
 * zoomFactor       Number  地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为-1，则最终的地图级别为9
 * delay            Number  改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效
 * 
 * 凯立德
 * points       Array<Point|KeyPoint|GbPoint>
 * [,margins: Array<Number>]
 * 
 */
Map.prototype._getViewport = function(view, viewportOptions) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getViewport(view, viewportOptions);
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getViewport(view, viewportOptions);
  }
};

/**
 * 返回地图当前缩放级别
 * @return 	Number
 */
Map.prototype._getZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getZoom();
  } else if (mapProvider == "kld") {
    return window["_" + mapId].getZoom();
  }
};

/**
 * 设初始化地图。
 * 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。
 * 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
 * @params {Point}   center
 * @params {Number}   zoom
 */
Map.prototype._centerAndZoom = function(center, zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].centerAndZoom(center, zoom);
  } else if (mapProvider == "kld") {
    window["_" + mapId].centerAndZoom(center, zoom);
  }
};

/**
 * 将地图的中心点更改为给定的点。
 * 如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果
 * @params {Point}        center
 * @params {PanOptions}   opts
 * --------------------------------------
 * PanOptions
 * 百度
 * noAnimation  Boolean 是否在平移过程中禁止动画
 */
Map.prototype._panTo = function(center, opts) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].panTo(center, opts);
  } else if (mapProvider == "kld") {
  }
};

/**
 * 将地图在水平位置上移动x像素，垂直位置上移动y像素。
 * 如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
 * @params {Number}        x
 * @params {Number}        y
 * @params {PanOptions}    opts
 * PanOptions
 * 百度
 * noAnimation  Boolean 是否在平移过程中禁止动画
 */
Map.prototype._panBy = function(x, y, opts) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].panBy(x, y, opts);
  } else if (mapProvider == "kld") {
  }
};

/**
 * 重新设置地图，恢复地图初始化时的中心点和级别
 */
Map.prototype._reset = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].reset();
  } else if (mapProvider == "kld") {
  }
};

/**
 * 设置地图中心点。center除了可以为坐标点以外，还支持城市名
 * @params {Point | String)} center
 */
Map.prototype._setCenter = function(center) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setCenter(center);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setCenter(center);
  }
};

/**
 * 设置地图城市，注意当地图初始化时的类型设置为BMAP_NORMAL_MAP时，需要在调用centerAndZoom之前调用此方法设置地图所在城市。
 * 例如：
 *  var map = new BMap.Map(“container”, {mapType: BMAP_NORMAL_MAP});
 *  map.setCurrentCity(“北京市”);
 *  map.centerAndZoom(new BMap.Point(116.404, 39.915), 18);
 * 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
 * @params {String} city
 */
Map.prototype._setCurrentCity = function(city) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setCurrentCity(city);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setCurrentCity(city);
  }
};

/**
 * 根据提供的地理区域或坐标设置地图视野，
 * 调整后的视野会保证包含提供的地理区域或坐标
 * @params {Array<Point> | Viewport}   view
 * @params {ViewportOptions}           viewportOptions
 * 
 * --------------------------
 * ViewportOptions
 * 百度
 * enableAnimation  Boolean         是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图
 * margins          Array<Number>   视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
 * zoomFactor       Number          地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为-1，则最终的地图级别为9
 * delay            Number          改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效
 */
Map.prototype._setViewport = function(view, viewportOptions) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setViewport(view, viewportOptions);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setViewport(view, viewportOptions);
  }
};

/**
 * 将视图切换到指定的缩放等级，中心点坐标不变。
 * 注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动
 * @params {Number}   zoom
 */
Map.prototype._setZoom = function(zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].setZoom(zoom);
  } else if (mapProvider == "kld") {
    window["_" + mapId].setZoom(zoom);
  }
};

/**
 * 放大一级视图
 */
Map.prototype._zoomIn = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].zoomIn();
  } else if (mapProvider == "kld") {
    window["_" + mapId].zoomIn();
  }
};

/**
 * 缩小一级视图
 */
Map.prototype._zoomOut = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].zoomOut();
  } else if (mapProvider == "kld") {
    window["_" + mapId].zoomOut();
  }
};

/**
 * 为地图添加热区
 * @params {Hotspot}    hotspot
 */
Map.prototype._addHotspot = function(hotspot) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].addHotspot(hotspot);
  } else if (mapProvider == "kld") {
    window["_" + mapId].addHotspot(hotspot);
  }
};

/**
 * 移除某个地图热区
 * @params {Hotspot}   hotspot
 */
Map.prototype._removeHotspot = function(hotspot) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].removeHotspot(hotspot);
  } else if (mapProvider == "kld") {
    window["_" + mapId].removeHotspot(hotspot);
  }
};

/**
 * 清空地图所有热区
 */
Map.prototype._clearHotspots = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].clearHotspots();
  } else if (mapProvider == "kld") {
    window["_" + mapId].clearHotspots();
  }
};

/**
 * 将控件添加到地图，一个控件实例只能向地图中添加一次
 * @params {Control}    control
 */
Map.prototype._addControl = function(control) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].addControl(control);
  } else if (mapProvider == "kld") {
    window["_" + mapId].addMapControl(control);
  }
};

/**
 * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
 * @params {Control}    control
 */
Map.prototype._removeControl = function(control) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].removeControl(control);
  } else if (mapProvider == "kld") {
    window["_" + mapId].removeMapControl(control);
  }
};

/**
 * 返回地图的容器元素。
 * 当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
 * @return HTMLElement
 */
Map.prototype._getContainer = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getContainer();
  } else if (mapProvider == "kld") {
  }
};

/**
 * 添加右键菜单
 * @params {ContextMenu}   menu
 */
Map.prototype._addContextMenu = function(menu) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].addContextMenu(menu);
  } else if (mapProvider == "kld") {
    window["_" + mapId].addContextMenu(menu);
  }
};

/**
 * 移除右键菜单
 * @params {ContextMenu}   menu
 */
Map.prototype._removeContextMenu = function(menu) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].removeContextMenu(menu);
  } else if (mapProvider == "kld") {
    window["_" + mapId].removeContextMenu(menu);
  }
};

/**
 * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
 * @params {Overlay}    overlay
 */
Map.prototype._addOverlay = function(overlay) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].addOverlay(overlay);
  } else if (mapProvider == "kld") {
    window["_" + mapId].addLayer(overlay);
  }
};

/**
 * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
 * @params {Overlay}    overlay
 */
Map.prototype._removeOverlay = function(overlay) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].removeOverlay(overlay);
  } else if (mapProvider == "kld") {
    window["_" + mapId].removeLayer(overlay);
  }
};

/**
 * 清除地图上所有覆盖物
 */
Map.prototype._clearOverlays = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].clearOverlays();
  } else if (mapProvider == "kld") {
    window["_" + mapId].clearLayer();
  }
};

/**
 * 在地图上打开信息窗口
 * @params {InfoWindow}     infoWnd
 * @params {Point}          point
 */
Map.prototype._openInfoWindow = function(infoWnd, point) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].openInfoWindow(infoWnd, point);
  } else if (mapProvider == "kld") {
    window["_" + mapId].openInfoWindow(infoWnd, point);
  }
};

/**
 * 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭
 */
Map.prototype._closeInfoWindow = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].closeInfoWindow();
  } else if (mapProvider == "kld") {
    window["_" + mapId].closeInfoWindow();
  }
};

/**
 * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
 * @params {Point}   point
 * @return Pixel
 */
Map.prototype._pointToOverlayPixel = function(point) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].pointToOverlayPixel(point);
  } else if (mapProvider == "kld") {
    window["_" + mapId].pointToOverlayPixel(point);
  }
};

/**
 * 根据覆盖物容器的坐标获取对应的地理坐标
 * @params {Pixel}   pixel
 * @return Point
 */
Map.prototype._overlayPixelToPoint = function(pixel) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].overlayPixelToPoint(pixel);
  } else if (mapProvider == "kld") {
    window["_" + mapId].overlayPixelToPoint(pixel);
  }
};

/**
 * 返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null
 * @return InfoWindow | Null
 */
Map.prototype._getInfoWindow = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getInfoWindow();
  } else if (mapProvider == "kld") {
  }
};

/**
 * 返回地图上的所有覆盖物
 * @return Array<Overlay>
 */
Map.prototype._getOverlays = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getOverlays();
  } else if (mapProvider == "kld") {
  }
};

/**
 * 返回地图覆盖物容器列表
 * @return 	MapPanes
 */
Map.prototype._getPanes = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getPanes();
  } else if (mapProvider == "kld") {
  }
};

/**
 * 添加一个自定义地图图层
 * @params {TileLayer}   tileLayer
 */
Map.prototype._addTileLayer = function(tileLayer) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].addTileLayer(tileLayer);
  } else if (mapProvider == "kld") {
  }
};

/**
 * 移除一个自定义地图图层
 * @params {TileLayer}   tileLayer
 */
Map.prototype._removeTileLayer = function(tileLayer) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    window["_" + mapId].removeTileLayer(tileLayer);
  } else if (mapProvider == "kld") {
  }
};

/**
 * 通过地图类型得到一个地图图层对象
 * @params {String}   mapType
 * @return TileLayer
 */
Map.prototype._getTileLayer = function(mapType) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].getTileLayer(mapType);
  } else if (mapProvider == "kld") {
  }
};

/**
 * 像素坐标转换为经纬度坐标
 * @params {Pixel}   pixel
 * @return Point
 */
Map.prototype._pixelToPoint = function(pixel) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].pixelToPoint(pixel);
  } else if (mapProvider == "kld") {
    return window["_" + mapId].pixelToPoint(pixel);
  }
};

/**
 * 经纬度坐标转换为像素坐标
 * @params { Point}   point
 * @return Pixel
 */
Map.prototype._pointToPixel = function(point) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (mapProvider == "baidu") {
    return window["_" + mapId].pointToPixel(point);
  } else if (mapProvider == "kld") {
    return window["_" + mapId].pointToPixel(point);
  }
};

export default Map;
