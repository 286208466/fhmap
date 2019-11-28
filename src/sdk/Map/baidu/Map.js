/**
 * 启用地图拖拽，默认启用
 */
function enableDragging(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enableDragging();
  }
  
  /**
   * 禁用地图拖拽
   */
  function disableDragging(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disableDragging();
  }
  
  /**
   * 启用滚轮放大缩小，默认禁用
   */
  function enableScrollWheelZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enableScrollWheelZoom();
  }
  
  /**
   * 禁用滚轮放大缩小
   */
  function disableScrollWheelZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disableScrollWheelZoom();
  }
  
  /**
   * 启用双击放大，默认启用
   */
  function enableDoubleClickZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enableDoubleClickZoom();
  }
  
  /**
   * 禁用双击放大
   *
   */
  function disableDoubleClickZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disableDoubleClickZoom();
  }
  
  /**
   * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。
   * 同时按下其中两个键可使地图进行对角移动。
   * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
   *
   */
  function enableKeyboard(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enableKeyboard();
  }
  
  /**
   * 禁用键盘操作
   */
  function disableKeyboard(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disableKeyboard();
  }
  
  /**
   * 启用地图惯性拖拽，默认禁用
   */
  function enableInertialDragging(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enableInertialDragging();
  }
  
  /**
   * 禁用地图惯性拖拽
   */
  function disableInertialDragging(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disableInertialDragging();
  }
  
  /**
   * 启用连续缩放效果，默认禁用
   */
  function enableContinuousZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enableContinuousZoom();
  }
  
  /**
   * 禁用连续缩放效果
   */
  function disableContinuousZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disableContinuousZoom();
  }
  
  /**
   * 启用双指操作缩放，默认启用
   */
  function enablePinchToZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enablePinchToZoom();
  }
  
  /**
   * 禁用双指操作缩放
   */
  function disablePinchToZoom(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disablePinchToZoom();
  }
  
  /**
   * 启用自动适应容器尺寸变化，默认启用
   */
  function enableAutoResize(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].enableAutoResize();
  }
  
  /**
   * 禁用自动适应容器尺寸变化
   */
  function disableAutoResize(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].disableAutoResize();
  }
  
  /**
   * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
   */
  function setDefaultCursor(cursor, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setDefaultCursor(cursor);
  }
  
  /**
   * 返回地图默认的鼠标指针样式
   */
  function getDefaultCursor(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getDefaultCursor();
  }
  
  /**
   * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
   */
  function setDraggingCursor(cursor, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setDraggingCursor(cursor);
  }
  
  /**
   * 返回拖拽地图时的鼠标指针样式
   */
  function getDraggingCursor(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getDraggingCursor();
  }
  
  /**
   * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
   */
  function setMinZoom(zoom, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setMinZoom(zoom);
  }
  
  /**
   * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
   */
  function setMaxZoom(zoom, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setMaxZoom(zoom);
  }
  
  /**
   * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
   */
  function setMapStyle(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setMapStyle();
  }
  
  /**
   * 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
   */
  function setMapStyleV2(style, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setMapStyleV2(style);
  }
  
  /**
   * 将全景实例与Map类进行绑定
   */
  function setPanorama(pano, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setPanorama(pano);
  }
  
  /**
   * 返回地图可视区域，以地理坐标表示
   */
  function getBounds(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getBounds();
  }
  
  /**
   * 返回地图当前中心点
   */
  function getCenter(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getCenter();
  }
  
  /**
   * 返回两点之间的距离，单位是米
   */
  function getDistance(start, end, mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getDistance(start, end);
  }
  
  /**
   * 返回地图类型
   */
  function getMapType(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getMapType();
  }
  
  /**
   * 返回地图视图的大小，以像素表示
   */
  function getSize(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getSize();
  }
  
  /**
   * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。
   * 此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
   */
  function getViewport(view, viewportOptions, mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getViewport(view, viewportOptions);
  }
  
  /**
   * 返回地图当前缩放级别
   */
  function getZoom(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getZoom();
  }
  
  /**
   * 获取与Map类绑定的全景实例
   */
  function getPanorama(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getPanorama();
  }
  
  /**
   * 设初始化地图。 
   * 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。
   * 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
   */
  function centerAndZoom(center, zoom, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].centerAndZoom(center, zoom);
  }
  
  /**
   * 将地图的中心点更改为给定的点。
   * 如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果
   */
  function panTo(center, opts, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].panTo(center, opts);
  }
  
  /**
   * 将地图在水平位置上移动x像素，垂直位置上移动y像素。
   * 如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
   */
  function panBy(x, y, opts, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].panBy(x, y, opts);
  }
  
  /**
   * 重新设置地图，恢复地图初始化时的中心点和级别
   */
  function reset(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].reset();
  }
  
  /**
   * 设置地图中心点。center除了可以为坐标点以外，还支持城市名
   */
  function setCenter(center, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setCenter(center);
  }
  
  /**
   * 设置地图城市，注意当地图初始化时的类型设置为BMAP_NORMAL_MAP时，需要在调用centerAndZoom之前调用此方法设置地图所在城市。
   * 例如： 
   *  var map = new BMap.Map(“container”, {mapType: BMAP_NORMAL_MAP}); 
   *  map.setCurrentCity(“北京市”); 
   *  map.centerAndZoom(new BMap.Point(116.404, 39.915), 18); 
   * 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
   */
  function setCurrentCity(city, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setCurrentCity(city);
  }
  
  /**
   * 设置地图类型
   */
  function setMapType(mapType, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setMapType(mapType);
  }
  
  /**
   * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
   */
  function setViewport(view, viewportOptions, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setViewport(view, viewportOptions);
  }
  
  /**
   * 将视图切换到指定的缩放等级，中心点坐标不变。
   * 注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动
   */
  function setZoom(zoom, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].setZoom(zoom);
  }
  
  /**
   * 是否使用高分辨率底图。
   * 仅当mapOptions.enableHighResolution属性为true且设备支持高分辨率时返回true
   */
  function highResolutionEnabled(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].highResolutionEnabled();
  }
  
  /**
   * 放大一级视图
   */
  function zoomIn(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].zoomIn();
  }
  
  /**
   * 缩小一级视图
   */
  function zoomOut(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].zoomOut();
  }
  
  /**
   * 为地图添加热区
   */
  function addHotspot(hotspot, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].addHotspot(hotspot);
  }
  
  /**
   * 移除某个地图热区
   */
  function removeHotspot(hotspot, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].removeHotspot(hotspot);
  }
  
  /**
   * 清空地图所有热区
   */
  function clearHotspots(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].clearHotspots();
  }
  
  /**
   * 将控件添加到地图，一个控件实例只能向地图中添加一次
   */
  function addControl(control, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].addControl(control);
  }
  
  /**
   * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
   */
  function removeControl(control, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].removeControl(control);
  }
  
  /**
   * 返回地图的容器元素。
   * 当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
   */
  function getContainer(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getContainer();
  }
  
  /**
   * 添加右键菜单
   */
  function addContextMenu(menu, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].addContextMenu(menu);
  }
  
  /**
   * 移除右键菜单
   */
  function removeContextMenu(menu, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].removeContextMenu(menu);
  }
  
  /**
   * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
   */
  function addOverlay(overlay, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].addOverlay(overlay);
  }
  
  /**
   * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
   */
  function removeOverlay(overlay, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].removeOverlay(overlay);
  }
  
  /**
   * 清除地图上所有覆盖物
   */
  function clearOverlays(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].clearOverlays();
  }
  
  /**
   * 在地图上打开信息窗口
   */
  function openInfoWindow(infoWnd, point, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].openInfoWindow(infoWnd, point);
  }
  
  /**
   * 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭
   */
  function closeInfoWindow(mapId) {
    mapId = mapId || "map";
    window["_" + mapId].closeInfoWindow();
  }
  
  /**
   * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
   */
  function pointToOverlayPixel(point, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].pointToOverlayPixel(point);
  }
  
  /**
   * 根据覆盖物容器的坐标获取对应的地理坐标
   */
  function overlayPixelToPoint(pixel, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].overlayPixelToPoint(pixel);
  }
  
  /**
   * 返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null
   */
  function getInfoWindow(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getInfoWindow();
  }
  
  /**
   * 返回地图上的所有覆盖物
   */
  function getOverlays(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getOverlays();
  }
  
  /**
   * 返回地图覆盖物容器列表
   */
  function getPanes(mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getPanes();
  }
  
  /**
   * 添加一个自定义地图图层
   */
  function addTileLayer(tileLayer, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].addTileLayer(tileLayer);
  }
  
  /**
   * 移除一个自定义地图图层
   */
  function removeTileLayer(tileLayer, mapId) {
    mapId = mapId || "map";
    window["_" + mapId].removeTileLayer(tileLayer);
  }
  
  /**
   * 通过地图类型得到一个地图图层对象
   */
  function getTileLayer(mapType, mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].getTileLayer(mapType);
  }
  
  /**
   * 像素坐标转换为经纬度坐标
   */
  function pixelToPoint(pixel, mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].pixelToPoint(pixel);
  }
  
  /**
   * 经纬度坐标转换为像素坐标
   */
  function pointToPixel(point, mapId) {
    mapId = mapId || "map";
    return window["_" + mapId].pointToPixel(point);
  }
  
  export default {
    enableDragging,
    disableDragging,
    enableScrollWheelZoom,
    disableScrollWheelZoom,
    enableDoubleClickZoom,
    disableDoubleClickZoom,
    enableKeyboard,
    disableKeyboard,
    enableInertialDragging,
    disableInertialDragging,
    enableContinuousZoom,
    disableContinuousZoom,
    enablePinchToZoom,
    disablePinchToZoom,
    enableAutoResize,
    disableAutoResize,
    setDefaultCursor,
    getDefaultCursor,
    setDraggingCursor,
    getDraggingCursor,
    setMinZoom,
    setMaxZoom,
    setMapStyle,
    setMapStyleV2,
    setPanorama,
    getBounds,
    getCenter,
    getDistance,
    getMapType,
    getSize,
    getViewport,
    getZoom,
    getPanorama,
    centerAndZoom,
    panTo,
    panBy,
    reset,
    setCenter,
    setCurrentCity,
    setMapType,
    setViewport,
    setZoom,
    highResolutionEnabled,
    zoomIn,
    zoomOut,
    addHotspot,
    removeHotspot,
    clearHotspots,
    addControl,
    removeControl,
    getContainer,
    addContextMenu,
    removeContextMenu,
    addOverlay,
    removeOverlay,
    clearOverlays,
    openInfoWindow,
    closeInfoWindow,
    pointToOverlayPixel,
    overlayPixelToPoint,
    getInfoWindow,
    getOverlays,
    getPanes,
    addTileLayer,
    removeTileLayer,
    getTileLayer,
    pixelToPoint,
    pointToPixel
  };
  