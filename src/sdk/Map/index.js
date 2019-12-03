import utils from "../../utils";
import bdmap from "../../class/baidu";
import kldmap from "../../class/kld";

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
  if (window.BMap) {
    map = new bdmap.Map(mapId, options);
    map.centerAndZoom(new bdmap.Point(116.404, 39.915), 11);
    map.enableScrollWheelZoom();
  } else {
    utils.error("[Map][init][不支持]");
  }
  window["_" + mapId] = map;
  this.options && this.options.success && this.options.success();
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
 * 启用地图拖拽，默认启用
 */
Map.prototype._enableDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enableDragging();
  } else if (window.Careland) {
  }
};

/**
 * 禁用地图拖拽
 */
Map.prototype._disableDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disableDragging();
  } else if (window.Careland) {
  }
};

/**
 * 启用滚轮放大缩小，默认禁用
 */
Map.prototype._enableScrollWheelZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enableScrollWheelZoom();
  } else if (window.Careland) {
  }
};

/**
 * 禁用滚轮放大缩小
 */
Map.prototype._disableScrollWheelZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disableScrollWheelZoom();
  } else if (window.Careland) {
  }
};

/**
 * 启用双击放大，默认启用
 */
Map.prototype._enableDoubleClickZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enableDoubleClickZoom();
  } else if (window.Careland) {
  }
};

/**
 * 禁用双击放大
 *
 */
Map.prototype._disableDoubleClickZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disableDoubleClickZoom();
  } else if (window.Careland) {
  }
};

/**
 * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。
 * 同时按下其中两个键可使地图进行对角移动。
 * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
 *
 */
Map.prototype._enableKeyboard = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enableKeyboard();
  } else if (window.Careland) {
  }
};

/**
 * 禁用键盘操作
 */
Map.prototype._disableKeyboard = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disableKeyboard();
  } else if (window.Careland) {
  }
};

/**
 * 启用地图惯性拖拽，默认禁用
 */
Map.prototype._enableInertialDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enableInertialDragging();
  } else if (window.Careland) {
  }
};

/**
 * 禁用地图惯性拖拽
 */
Map.prototype._disableInertialDragging = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disableInertialDragging();
  } else if (window.Careland) {
  }
};

/**
 * 启用连续缩放效果，默认禁用
 */
Map.prototype._enableContinuousZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enableContinuousZoom();
  } else if (window.Careland) {
  }
};

/**
 * 禁用连续缩放效果
 */
Map.prototype._disableContinuousZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disableContinuousZoom();
  } else if (window.Careland) {
  }
};

/**
 * 启用双指操作缩放，默认启用
 */
Map.prototype._enablePinchToZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enablePinchToZoom();
  } else if (window.Careland) {
  }
};

/**
 * 禁用双指操作缩放
 */
Map.prototype._disablePinchToZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disablePinchToZoom();
  } else if (window.Careland) {
  }
};

/**
 * 启用自动适应容器尺寸变化，默认启用
 */
Map.prototype._enableAutoResize = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].enableAutoResize();
  } else if (window.Careland) {
  }
};

/**
 * 禁用自动适应容器尺寸变化
 */
Map.prototype._disableAutoResize = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].disableAutoResize();
  } else if (window.Careland) {
  }
};

/**
 * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
 */
Map.prototype._setDefaultCursor = function(cursor) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setDefaultCursor(cursor);
  } else if (window.Careland) {
  }
};

/**
 * 返回地图默认的鼠标指针样式
 */
Map.prototype._getDefaultCursor = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getDefaultCursor();
  } else if (window.Careland) {
  }
};

/**
 * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
 */
Map.prototype._setDraggingCursor = function(cursor) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setDraggingCursor(cursor);
  } else if (window.Careland) {
  }
};

/**
 * 返回拖拽地图时的鼠标指针样式
 */
Map.prototype._getDraggingCursor = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getDraggingCursor();
  } else if (window.Careland) {
  }
};

/**
 * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
 */
Map.prototype._setMinZoom = function(zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setMinZoom(zoom);
  } else if (window.Careland) {
  }
};

/**
 * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
 */
Map.prototype._setMaxZoom = function(zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setMaxZoom(zoom);
  } else if (window.Careland) {
  }
};

/**
 * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
 */
Map.prototype._setMapStyle = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setMapStyle();
  } else if (window.Careland) {
  }
};

/**
 * 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
 */
Map.prototype._setMapStyleV2 = function(style) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setMapStyleV2(style);
  } else if (window.Careland) {
  }
};

/**
 * 将全景实例与Map类进行绑定
 */
Map.prototype._setPanorama = function(pano) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setPanorama(pano);
  } else if (window.Careland) {
  }
};

/**
 * 返回地图可视区域，以地理坐标表示
 */
Map.prototype._getBounds = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getBounds();
  } else if (window.Careland) {
  }
};

/**
 * 返回地图当前中心点
 */
Map.prototype._getCenter = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getCenter();
  } else if (window.Careland) {
  }
};

/**
 * 返回两点之间的距离，单位是米
 */
Map.prototype._getDistance = function(start, end) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getDistance(start, end);
  } else if (window.Careland) {
  }
};

/**
 * 返回地图类型
 */
Map.prototype._getMapType = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getMapType();
  } else if (window.Careland) {
  }
};

/**
 * 返回地图视图的大小，以像素表示
 */
Map.prototype._getSize = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getSize();
  } else if (window.Careland) {
  }
};

/**
 * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。
 * 此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
 */
Map.prototype._getViewport = function(view, viewportOptions) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getViewport(view, viewportOptions);
  } else if (window.Careland) {
  }
};

/**
 * 返回地图当前缩放级别
 */
Map.prototype._getZoom = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getZoom();
  } else if (window.Careland) {
  }
};

/**
 * 获取与Map类绑定的全景实例
 */
Map.prototype._getPanorama = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getPanorama();
  } else if (window.Careland) {
  }
};

/**
 * 设初始化地图。
 * 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。
 * 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
 */
Map.prototype._centerAndZoom = function(center, zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].centerAndZoom(center, zoom);
  } else if (window.Careland) {
  }
};

/**
 * 将地图的中心点更改为给定的点。
 * 如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果
 */
Map.prototype._panTo = function(center, opts) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].panTo(center, opts);
  } else if (window.Careland) {
  }
};

/**
 * 将地图在水平位置上移动x像素，垂直位置上移动y像素。
 * 如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
 */
Map.prototype._panBy = function(x, y, opts) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].panBy(x, y, opts);
  } else if (window.Careland) {
  }
};

/**
 * 重新设置地图，恢复地图初始化时的中心点和级别
 */
Map.prototype._reset = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].reset();
  } else if (window.Careland) {
  }
};

/**
 * 设置地图中心点。center除了可以为坐标点以外，还支持城市名
 */
Map.prototype._setCenter = function(center) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setCenter(center);
  } else if (window.Careland) {
  }
};

/**
 * 设置地图城市，注意当地图初始化时的类型设置为BMAP_NORMAL_MAP时，需要在调用centerAndZoom之前调用此方法设置地图所在城市。
 * 例如：
 *  var map = new BMap.Map(“container”, {mapType: BMAP_NORMAL_MAP});
 *  map.setCurrentCity(“北京市”);
 *  map.centerAndZoom(new BMap.Point(116.404, 39.915), 18);
 * 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
 */
Map.prototype._setCurrentCity = function(city) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setCurrentCity(city);
  } else if (window.Careland) {
  }
};

/**
 * 设置地图类型
 */
Map.prototype._setMapType = function(mapType) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setMapType(mapType);
  } else if (window.Careland) {
  }
};

/**
 * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
 */
Map.prototype._setViewport = function(view, viewportOptions) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setViewport(view, viewportOptions);
  } else if (window.Careland) {
  }
};

/**
 * 将视图切换到指定的缩放等级，中心点坐标不变。
 * 注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动
 */
Map.prototype._setZoom = function(zoom) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].setZoom(zoom);
  } else if (window.Careland) {
  }
};

/**
 * 是否使用高分辨率底图。
 * 仅当mapOptions.enableHighResolution属性为true且设备支持高分辨率时返回true
 */
Map.prototype._highResolutionEnabled = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].highResolutionEnabled();
  } else if (window.Careland) {
  }
};

/**
 * 放大一级视图
 */
Map.prototype._zoomIn = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].zoomIn();
  } else if (window.Careland) {
  }
};

/**
 * 缩小一级视图
 */
Map.prototype._zoomOut = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].zoomOut();
  } else if (window.Careland) {
  }
};

/**
 * 为地图添加热区
 */
Map.prototype._addHotspot = function(hotspot) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].addHotspot(hotspot);
  } else if (window.Careland) {
  }
};

/**
 * 移除某个地图热区
 */
Map.prototype._removeHotspot = function(hotspot) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].removeHotspot(hotspot);
  } else if (window.Careland) {
  }
};

/**
 * 清空地图所有热区
 */
Map.prototype._clearHotspots = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].clearHotspots();
  } else if (window.Careland) {
  }
};

/**
 * 将控件添加到地图，一个控件实例只能向地图中添加一次
 */
Map.prototype._addControl = function(control) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].addControl(control);
  } else if (window.Careland) {
  }
};

/**
 * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
 */
Map.prototype._removeControl = function(control) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].removeControl(control);
  } else if (window.Careland) {
  }
};

/**
 * 返回地图的容器元素。
 * 当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
 */
Map.prototype._getContainer = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getContainer();
  } else if (window.Careland) {
  }
};

/**
 * 添加右键菜单
 */
Map.prototype._addContextMenu = function(menu) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].addContextMenu(menu);
  } else if (window.Careland) {
  }
};

/**
 * 移除右键菜单
 */
Map.prototype._removeContextMenu = function(menu) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].removeContextMenu(menu);
  } else if (window.Careland) {
  }
};

/**
 * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
 */
Map.prototype._addOverlay = function(overlay) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].addOverlay(overlay);
  } else if (window.Careland) {
  }
};

/**
 * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
 */
Map.prototype._removeOverlay = function(overlay) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].removeOverlay(overlay);
  } else if (window.Careland) {
  }
};

/**
 * 清除地图上所有覆盖物
 */
Map.prototype._clearOverlays = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].clearOverlays();
  } else if (window.Careland) {
  }
};

/**
 * 在地图上打开信息窗口
 */
Map.prototype._openInfoWindow = function(infoWnd, point) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].openInfoWindow(infoWnd, point);
  } else if (window.Careland) {
  }
};

/**
 * 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭
 */
Map.prototype._closeInfoWindow = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].closeInfoWindow();
  } else if (window.Careland) {
  }
};

/**
 * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
 */
Map.prototype._pointToOverlayPixel = function(point) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].pointToOverlayPixel(point);
  } else if (window.Careland) {
  }
};

/**
 * 根据覆盖物容器的坐标获取对应的地理坐标
 */
Map.prototype._overlayPixelToPoint = function(pixel) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].overlayPixelToPoint(pixel);
  } else if (window.Careland) {
  }
};

/**
 * 返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null
 */
Map.prototype._getInfoWindow = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getInfoWindow();
  } else if (window.Careland) {
  }
};

/**
 * 返回地图上的所有覆盖物
 */
Map.prototype._getOverlays = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getOverlays();
  } else if (window.Careland) {
  }
};

/**
 * 返回地图覆盖物容器列表
 */
Map.prototype._getPanes = function() {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getPanes();
  } else if (window.Careland) {
  }
};

/**
 * 添加一个自定义地图图层
 */
Map.prototype._addTileLayer = function(tileLayer) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].addTileLayer(tileLayer);
  } else if (window.Careland) {
  }
};

/**
 * 移除一个自定义地图图层
 */
Map.prototype._removeTileLayer = function(tileLayer) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    window["_" + mapId].removeTileLayer(tileLayer);
  } else if (window.Careland) {
  }
};

/**
 * 通过地图类型得到一个地图图层对象
 */
Map.prototype._getTileLayer = function(mapType) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].getTileLayer(mapType);
  } else if (window.Careland) {
  }
};

/**
 * 像素坐标转换为经纬度坐标
 */
Map.prototype._pixelToPoint = function(pixel) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].pixelToPoint(pixel);
  } else if (window.Careland) {
  }
};

/**
 * 经纬度坐标转换为像素坐标
 */
Map.prototype._pointToPixel = function(point) {
  var options = this.options || {};
  var mapId = options.mapId || "map";
  if (window.BMap) {
    return window["_" + mapId].pointToPixel(point);
  } else if (window.Careland) {
  }
};

export default Map;
