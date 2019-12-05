/*!
 * fhmap v0.0.0 (https://github.com/286208466/fhmap#readme)
 * Copyright 2019, fuhai
 * MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fhmap"] = factory();
	else
		root["fhmap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map = __webpack_require__(1);

	var _map2 = _interopRequireDefault(_map);

	var _point = __webpack_require__(3);

	var _point2 = _interopRequireDefault(_point);

	var _Pixel = __webpack_require__(4);

	var _Pixel2 = _interopRequireDefault(_Pixel);

	var _Bounds = __webpack_require__(5);

	var _Bounds2 = _interopRequireDefault(_Bounds);

	var _Size = __webpack_require__(6);

	var _Size2 = _interopRequireDefault(_Size);

	var _Control = __webpack_require__(7);

	var _Control2 = _interopRequireDefault(_Control);

	var _NavigationControl = __webpack_require__(8);

	var _NavigationControl2 = _interopRequireDefault(_NavigationControl);

	var _GeolocationControl = __webpack_require__(9);

	var _GeolocationControl2 = _interopRequireDefault(_GeolocationControl);

	var _OverviewMapControl = __webpack_require__(10);

	var _OverviewMapControl2 = _interopRequireDefault(_OverviewMapControl);

	var _ScaleControl = __webpack_require__(11);

	var _ScaleControl2 = _interopRequireDefault(_ScaleControl);

	var _CopyrightControl = __webpack_require__(12);

	var _CopyrightControl2 = _interopRequireDefault(_CopyrightControl);

	var _MapTypeControl = __webpack_require__(13);

	var _MapTypeControl2 = _interopRequireDefault(_MapTypeControl);

	var _PanoramaControl = __webpack_require__(14);

	var _PanoramaControl2 = _interopRequireDefault(_PanoramaControl);

	var _Overlay = __webpack_require__(15);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	var _Marker = __webpack_require__(16);

	var _Marker2 = _interopRequireDefault(_Marker);

	var _Icon = __webpack_require__(17);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _InfoWindow = __webpack_require__(18);

	var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

	var _Label = __webpack_require__(19);

	var _Label2 = _interopRequireDefault(_Label);

	var _Polyline = __webpack_require__(20);

	var _Polyline2 = _interopRequireDefault(_Polyline);

	var _IconSequence = __webpack_require__(21);

	var _IconSequence2 = _interopRequireDefault(_IconSequence);

	var _Polygon = __webpack_require__(22);

	var _Polygon2 = _interopRequireDefault(_Polygon);

	var _Circle = __webpack_require__(23);

	var _Circle2 = _interopRequireDefault(_Circle);

	var _GroundOverlay = __webpack_require__(24);

	var _GroundOverlay2 = _interopRequireDefault(_GroundOverlay);

	var _PointCollection = __webpack_require__(25);

	var _PointCollection2 = _interopRequireDefault(_PointCollection);

	var _Hotspot = __webpack_require__(26);

	var _Hotspot2 = _interopRequireDefault(_Hotspot);

	var _Symbol2 = __webpack_require__(27);

	var _Symbol3 = _interopRequireDefault(_Symbol2);

	var _CanvasLayer = __webpack_require__(28);

	var _CanvasLayer2 = _interopRequireDefault(_CanvasLayer);

	var _ContextMenu = __webpack_require__(29);

	var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

	var _MenuItem = __webpack_require__(30);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _MapType = __webpack_require__(31);

	var _MapType2 = _interopRequireDefault(_MapType);

	var _TileLayer = __webpack_require__(32);

	var _TileLayer2 = _interopRequireDefault(_TileLayer);

	var _TrafficLayer = __webpack_require__(33);

	var _TrafficLayer2 = _interopRequireDefault(_TrafficLayer);

	var _CustomLayer = __webpack_require__(34);

	var _CustomLayer2 = _interopRequireDefault(_CustomLayer);

	var _PanoramaCoverageLayer = __webpack_require__(35);

	var _PanoramaCoverageLayer2 = _interopRequireDefault(_PanoramaCoverageLayer);

	var _LocalSearch = __webpack_require__(36);

	var _LocalSearch2 = _interopRequireDefault(_LocalSearch);

	var _TransitRoute = __webpack_require__(37);

	var _TransitRoute2 = _interopRequireDefault(_TransitRoute);

	var _WalkingRoute = __webpack_require__(38);

	var _WalkingRoute2 = _interopRequireDefault(_WalkingRoute);

	var _RidingRoute = __webpack_require__(39);

	var _RidingRoute2 = _interopRequireDefault(_RidingRoute);

	var _DrivingRoute = __webpack_require__(40);

	var _DrivingRoute2 = _interopRequireDefault(_DrivingRoute);

	var _Geocoder = __webpack_require__(41);

	var _Geocoder2 = _interopRequireDefault(_Geocoder);

	var _LocalCity = __webpack_require__(42);

	var _LocalCity2 = _interopRequireDefault(_LocalCity);

	var _Geolocation = __webpack_require__(43);

	var _Geolocation2 = _interopRequireDefault(_Geolocation);

	var _BusLineSearch = __webpack_require__(44);

	var _BusLineSearch2 = _interopRequireDefault(_BusLineSearch);

	var _Autocomplete = __webpack_require__(45);

	var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

	var _Boundary = __webpack_require__(46);

	var _Boundary2 = _interopRequireDefault(_Boundary);

	var _Convertor = __webpack_require__(47);

	var _Convertor2 = _interopRequireDefault(_Convertor);

	var _Panorama = __webpack_require__(48);

	var _Panorama2 = _interopRequireDefault(_Panorama);

	var _PanoramaService = __webpack_require__(49);

	var _PanoramaService2 = _interopRequireDefault(_PanoramaService);

	var _PanoramaLabel = __webpack_require__(50);

	var _PanoramaLabel2 = _interopRequireDefault(_PanoramaLabel);

	var _utils = __webpack_require__(2);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//

	//

	//
	exports.default = {
	  Map: _map2.default,
	  //
	  Point: _point2.default,
	  Pixel: _Pixel2.default,
	  Bounds: _Bounds2.default,
	  Size: _Size2.default,

	  //
	  Control: _Control2.default,
	  NavigationControl: _NavigationControl2.default,
	  GeolocationControl: _GeolocationControl2.default,
	  OverviewMapControl: _OverviewMapControl2.default,
	  ScaleControl: _ScaleControl2.default,
	  CopyrightControl: _CopyrightControl2.default,
	  MapTypeControl: _MapTypeControl2.default,
	  PanoramaControl: _PanoramaControl2.default,
	  //
	  Overlay: _Overlay2.default,
	  Marker: _Marker2.default,
	  Icon: _Icon2.default,
	  InfoWindow: _InfoWindow2.default,
	  Label: _Label2.default,
	  Polyline: _Polyline2.default,
	  IconSequence: _IconSequence2.default,
	  Polygon: _Polygon2.default,
	  Circle: _Circle2.default,
	  GroundOverlay: _GroundOverlay2.default,
	  PointCollection: _PointCollection2.default,
	  Hotspot: _Hotspot2.default,
	  Symbol: _Symbol3.default,
	  CanvasLayer: _CanvasLayer2.default,
	  //
	  ContextMenu: _ContextMenu2.default,
	  MenuItem: _MenuItem2.default,
	  //
	  MapType: _MapType2.default,
	  //
	  TileLayer: _TileLayer2.default,
	  TrafficLayer: _TrafficLayer2.default,
	  CustomLayer: _CustomLayer2.default,
	  PanoramaCoverageLayer: _PanoramaCoverageLayer2.default,
	  //
	  LocalSearch: _LocalSearch2.default,
	  TransitRoute: _TransitRoute2.default,
	  WalkingRoute: _WalkingRoute2.default,
	  RidingRoute: _RidingRoute2.default,
	  DrivingRoute: _DrivingRoute2.default,
	  Geocoder: _Geocoder2.default,
	  LocalCity: _LocalCity2.default,
	  Geolocation: _Geolocation2.default,
	  BusLineSearch: _BusLineSearch2.default,
	  Autocomplete: _Autocomplete2.default,
	  Boundary: _Boundary2.default,
	  Convertor: _Convertor2.default,
	  //
	  Panorama: _Panorama2.default,
	  PanoramaService: _PanoramaService2.default,
	  PanoramaLabel: _PanoramaLabel2.default,

	  //
	  utils: _utils2.default
	};
	//

	//

	//

	//

	//

	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var mapProvider = (0, _utils.getMapProvider)();

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
	function Map() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  this.options = options;
	}
	/**
	 * 初始化
	 *
	 * */
	Map.prototype._init = function () {
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
	Map.prototype._destroy = function () {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  window["_" + mapId] = null;
	};

	/**
	 * 启用地图拖拽
	 * 百度默认启用
	 */
	Map.prototype._enableDragging = function () {
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
	Map.prototype._disableDragging = function () {
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
	Map.prototype._enableScrollWheelZoom = function () {
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
	Map.prototype._disableScrollWheelZoom = function () {
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
	Map.prototype._enableDoubleClickZoom = function () {
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
	Map.prototype._disableDoubleClickZoom = function () {
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
	Map.prototype._enableKeyboard = function () {
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
	Map.prototype._disableKeyboard = function () {
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
	Map.prototype._enableInertialDragging = function () {
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
	Map.prototype._disableInertialDragging = function () {
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
	Map.prototype._enablePinchToZoom = function () {
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
	Map.prototype._disablePinchToZoom = function () {
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
	Map.prototype._enableAutoResize = function () {
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
	Map.prototype._disableAutoResize = function () {
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
	Map.prototype._setDefaultCursor = function (cursor) {
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
	Map.prototype._getDefaultCursor = function () {
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
	Map.prototype._setDraggingCursor = function (cursor) {
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
	Map.prototype._getDraggingCursor = function () {
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
	Map.prototype._setMinZoom = function (zoom) {
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
	Map.prototype._setMaxZoom = function (zoom) {
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
	Map.prototype._getBounds = function () {
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
	Map.prototype._getCenter = function () {
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
	Map.prototype._getDistance = function (start, end) {
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
	Map.prototype._getSize = function () {
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
	Map.prototype._getViewport = function (view, viewportOptions) {
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
	Map.prototype._getZoom = function () {
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
	Map.prototype._centerAndZoom = function (center, zoom) {
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
	Map.prototype._panTo = function (center, opts) {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    window["_" + mapId].panTo(center, opts);
	  } else if (mapProvider == "kld") {}
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
	Map.prototype._panBy = function (x, y, opts) {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    window["_" + mapId].panBy(x, y, opts);
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 重新设置地图，恢复地图初始化时的中心点和级别
	 */
	Map.prototype._reset = function () {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    window["_" + mapId].reset();
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 设置地图中心点。center除了可以为坐标点以外，还支持城市名
	 * @params {Point | String)} center
	 */
	Map.prototype._setCenter = function (center) {
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
	Map.prototype._setCurrentCity = function (city) {
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
	Map.prototype._setViewport = function (view, viewportOptions) {
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
	Map.prototype._setZoom = function (zoom) {
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
	Map.prototype._zoomIn = function () {
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
	Map.prototype._zoomOut = function () {
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
	Map.prototype._addHotspot = function (hotspot) {
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
	Map.prototype._removeHotspot = function (hotspot) {
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
	Map.prototype._clearHotspots = function () {
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
	Map.prototype._addControl = function (control) {
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
	Map.prototype._removeControl = function (control) {
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
	Map.prototype._getContainer = function () {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    return window["_" + mapId].getContainer();
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 添加右键菜单
	 * @params {ContextMenu}   menu
	 */
	Map.prototype._addContextMenu = function (menu) {
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
	Map.prototype._removeContextMenu = function (menu) {
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
	Map.prototype._addOverlay = function (overlay) {
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
	Map.prototype._removeOverlay = function (overlay) {
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
	Map.prototype._clearOverlays = function () {
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
	Map.prototype._openInfoWindow = function (infoWnd, point) {
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
	Map.prototype._closeInfoWindow = function () {
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
	Map.prototype._pointToOverlayPixel = function (point) {
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
	Map.prototype._overlayPixelToPoint = function (pixel) {
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
	Map.prototype._getInfoWindow = function () {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    return window["_" + mapId].getInfoWindow();
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 返回地图上的所有覆盖物
	 * @return Array<Overlay>
	 */
	Map.prototype._getOverlays = function () {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    return window["_" + mapId].getOverlays();
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 返回地图覆盖物容器列表
	 * @return 	MapPanes
	 */
	Map.prototype._getPanes = function () {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    return window["_" + mapId].getPanes();
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 添加一个自定义地图图层
	 * @params {TileLayer}   tileLayer
	 */
	Map.prototype._addTileLayer = function (tileLayer) {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    window["_" + mapId].addTileLayer(tileLayer);
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 移除一个自定义地图图层
	 * @params {TileLayer}   tileLayer
	 */
	Map.prototype._removeTileLayer = function (tileLayer) {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    window["_" + mapId].removeTileLayer(tileLayer);
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 通过地图类型得到一个地图图层对象
	 * @params {String}   mapType
	 * @return TileLayer
	 */
	Map.prototype._getTileLayer = function (mapType) {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    return window["_" + mapId].getTileLayer(mapType);
	  } else if (mapProvider == "kld") {}
	};

	/**
	 * 像素坐标转换为经纬度坐标
	 * @params {Pixel}   pixel
	 * @return Point
	 */
	Map.prototype._pixelToPoint = function (pixel) {
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
	Map.prototype._pointToPixel = function (point) {
	  var options = this.options || {};
	  var mapId = options.mapId || "map";
	  if (mapProvider == "baidu") {
	    return window["_" + mapId].pointToPixel(point);
	  } else if (mapProvider == "kld") {
	    return window["_" + mapId].pointToPixel(point);
	  }
	};

	exports.default = Map;
	module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function error(msg) {
	  throw new Error(msg);
	}

	/**
	 * 获取地图厂商
	 *  */
	function getMapProvider() {
	  var type = "";
	  if (window.BMap) {
	    type = "baidu";
	  } else if (window.Careland) {
	    type = "kld";
	  }
	  return type;
	}

	/**
	 * 寄生组合继承
	 *  */
	function inheritPrototype(son, father) {
	  if (son && father) {
	    var prototype = Object.create(father.prototype);
	    son.prototype = prototype;
	    prototype.constructor = son;
	  } else {
	    console.error("son or father is undefined");
	    console.log("son", son);
	    console.log("father", father);
	  }
	}

	exports.default = {
	  error: error,
	  getMapProvider: getMapProvider,
	  inheritPrototype: inheritPrototype
	};
	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Point;
	} else if (mapProvider == "kld") {
	  Parent = Careland.GbPoint;
	}

	/**
	 * 此类表示一个地理坐标点。
	 * @params  {Number}    lng
	 * @params  {Number}    lat
	 *  */
	function Point(lng, lat) {
	  if (mapProvider == "baidu") {
	    Parent.call(this, lng, lat);
	  } else if (mapProvider == "kld") {
	    Parent.call(this, lat, lng);
	  }
	}

	(0, _utils.inheritPrototype)(Point, Parent);

	/**
	 * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
	 * @return Boolean
	 *  */
	Point.prototype._equals = function (otherPoint) {
	  if (mapProvider == "baidu") {
	    return this.equals(otherPoint);
	  } else {
	    console.error("[Point]不支持该地图调用此方法");
	  }
	};

	exports.default = Point;
	module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Pixel;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Pixel;
	}

	/**
	 * 此类表示地图上的一点，单位为像素。
	 * @params {Number} x
	 * @params {Number} y
	 *  */
	function Pixel(x, y) {
	  Parent.call(this, x, y);
	}

	(0, _utils.inheritPrototype)(Pixel, Parent);

	/**
	 * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
	 * @return Boolean
	 *  */
	Pixel.prototype._equals = function (otherPixel) {
	  if (mapProvider == "baidu") {
	    return this.equals(otherPixel);
	  } else {
	    console.error("[Pixel]不支持该地图调用此方法");
	  }
	};

	exports.default = Pixel;
	module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Bounds;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Bounds;
	}

	/**
	 * 此类表示地理坐标的矩形区域。
	 * @params {Point}  sw
	 * @params {Point}  ne
	 *  */
	function Bounds(sw, ne) {
	  Parent.call(this, sw, ne);
	}

	(0, _utils.inheritPrototype)(Bounds, Parent);

	/**
	 * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
	 * @params {Bounds} otherBounds
	 * @return Boolean
	 *  */
	Bounds.prototype._equals = function (otherBounds) {
	  if (mapProvider == "baidu") {
	    return this.equals(otherBounds);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 如果点的地理坐标位于此矩形内，则返回true
	 * @params {Point}   point
	 * @return Boolean
	 *  */
	Bounds.prototype._containsPoint = function (point) {
	  if (mapProvider == "baidu") {
	    return this.containsPoint(point);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 传入的矩形区域完全包含于此矩形区域中，则返回true
	 * @params {Bounds}   otherBounds
	 * @return Boolean
	 *  */
	Bounds.prototype._containsBounds = function (otherBounds) {
	  if (mapProvider == "baidu") {
	    return this.containsBounds(otherBounds);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 计算与另一矩形的交集区域
	 * @params {Bounds}   otherBounds
	 * @return Bounds
	 *  */
	Bounds.prototype._intersects = function (otherBounds) {
	  if (mapProvider == "baidu") {
	    return this.intersects(otherBounds);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 放大此矩形，使其包含给定的点
	 * @params {Point}   point
	 *  */
	Bounds.prototype._extend = function (point) {
	  if (mapProvider == "baidu") {
	    return this.extend(point);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回矩形的中心点
	 * @return Point
	 *  */
	Bounds.prototype._getCenter = function () {
	  if (mapProvider == "baidu") {
	    return this.getCenter();
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 如果矩形为空，则返回true
	 * @return Boolean
	 *  */
	Bounds.prototype._isEmpty = function () {
	  if (mapProvider == "baidu") {
	    return this.isEmpty();
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回矩形区域的西南角
	 * @return Point
	 *  */
	Bounds.prototype._getSouthWest = function () {
	  if (mapProvider == "baidu") {
	    return this.getSouthWest();
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回矩形区域的东北角
	 * @return Point
	 *  */
	Bounds.prototype._getNorthEast = function () {
	  if (mapProvider == "baidu") {
	    return this.getNorthEast();
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回矩形区域的跨度
	 * @return Point
	 *  */
	Bounds.prototype._toSpan = function () {
	  if (mapProvider == "baidu") {
	    return this.toSpan();
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	exports.default = Bounds;
	module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Size;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Size;
	}

	/**
	 * 此类以像素表示一个矩形区域的大小。
	 * @params {Number} width   水平方向的数值
	 * @params {Number} height  竖直方向的数值
	 *  */
	function Size(width, height) {
	  Parent.call(this, width, height);
	}

	(0, _utils.inheritPrototype)(Size, Parent);

	/**
	 * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
	 * @params {Size}   otherSize   
	 * @return Boolean
	 *  */
	Size.prototype._equals = function (otherSize) {
	  if (mapProvider == "baidu") {
	    return this.equals(otherSize);
	  } else {
	    console.error("[Size]不支持该地图调用此方法");
	  }
	};

	exports.default = Size;
	module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Control;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Control;
	}

	/**
	 * 此类是所有控件的基类，您可以通过此类来实现自定义控件。
	 * 所有控件均包含Control类的属性、方法和事件。
	 * 通过Map.addControl()方法可将控件添加到地图上。
	 * 
	 *  */
	function Control() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(Control, Parent);

	exports.default = Control;
	module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.NavigationControl;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Navigation;
	}

	/**
	 * 此类表示地图的平移缩放控件，可以对地图进行上下左右四个方向的平移和缩放操作。
	 * @params {NavigationControlOptions}   opts
	 * **********************************
	 * NavigationControlOptions
	 * anchor           {ControlAnchor}         控件的停靠位置
	 * offset           {Size}                  控件的水平偏移值
	 * type             {NavigationControlType} 平移缩放控件的类型
	 * showZoomInfo     {Boolean}               是否显示级别提示信息
	 * enableGeolocation{Boolean}               控件是否集成定位功能，默认为false
	 * **********************************
	 *  */
	function NavigationControl(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(NavigationControl, Parent);

	NavigationControl.prototype._getType = function () {
	  if (mapProvider == "baidu") {
	    return this.getType();
	  } else {
	    console.error("[NavigationControl]不支持该地图调用此方法");
	  }
	};

	NavigationControl.prototype._setType = function (type) {
	  if (mapProvider == "baidu") {
	    return this.setType(type);
	  } else {
	    console.error("[NavigationControl]不支持该地图调用此方法");
	  }
	};

	exports.default = NavigationControl;
	module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.GeolocationControl;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类是负责进行地图定位的控件，使用html5浏览器定位功能，此类继承Control所有功能。
	 *  */
	function GeolocationControl(type) {
	  Parent.call(this, type);
	}

	(0, _utils.inheritPrototype)(GeolocationControl, Parent);

	/**
	 * 开始进行定位
	 * @return {none}
	 *  */
	GeolocationControl.prototype._location = function () {
	  if (mapProvider == "baidu") {
	    return this.location();
	  } else {
	    console.error("[GeolocationControl]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回当前的定位信息。若当前还未定位，则返回null
	 * @return {AddressComponent}
	 *  */
	GeolocationControl.prototype._getAddressComponent = function () {
	  if (mapProvider == "baidu") {
	    return this.getAddressComponent();
	  } else {
	    console.error("[GeolocationControl]不支持该地图调用此方法");
	  }
	};

	exports.default = GeolocationControl;
	module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.OverviewMapControl;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Overview;
	}

	/**
	 * 此类表示缩略地图控件。
	 * @params { OverviewMapControlOptions}    opts
	 *  */
	function OverviewMapControl(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(OverviewMapControl, Parent);

	/**
	 * 切换缩略地图控件的开合状态
	 *  */
	OverviewMapControl.prototype._changeView = function () {
	  if (mapProvider == "baidu") {
	    return this.changeView(otherSize);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置缩略地图的大小
	 *  */
	OverviewMapControl.prototype._setSize = function (size) {
	  if (mapProvider == "baidu") {
	    return this.setSize(size);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回缩略地图的大小
	 *  */
	OverviewMapControl.prototype._getSize = function () {
	  if (mapProvider == "baidu") {
	    return this.getSize(size);
	  } else {
	    console.error("[Bounds]不支持该地图调用此方法");
	  }
	};

	exports.default = OverviewMapControl;
	module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.ScaleControl;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Scale;
	}

	/**
	 * 此类表示比例尺控件。
	 *
	 *  */
	function ScaleControl(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(ScaleControl, Parent);

	/**
	 * 返回比例尺单位制
	 * @return {LengthUnit}
	 *  */
	ScaleControl.prototype._getUnit = function () {
	  if (mapProvider == "baidu") {
	    return this.getUnit();
	  } else {
	    console.error("[ScaleControl]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置比例尺单位制
	 * @return {none}
	 *  */
	ScaleControl.prototype._setUnit = function (unit) {
	  if (mapProvider == "baidu") {
	    return this.setUnit(unit);
	  } else {
	    console.error("[ScaleControl]不支持该地图调用此方法");
	  }
	};

	exports.default = ScaleControl;
	module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.CopyrightControl;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类表示版权控件，您可以在地图上添加自己的版权信息。
	 * 每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。
	 *  */
	function CopyrightControl(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(CopyrightControl, Parent);

	/**
	 * 添加版权信息
	 *  */
	CopyrightControl.prototype._addCopyright = function (copyright) {
	  if (mapProvider == "baidu") {
	    return this.addCopyright(copyright);
	  } else {
	    console.error("[CopyrightControl]不支持该地图调用此方法");
	  }
	};

	/**
	 * 移除版权信息
	 *  */
	CopyrightControl.prototype._removeCopyright = function (id) {
	  if (mapProvider == "baidu") {
	    return this.removeCopyright(id);
	  } else {
	    console.error("[CopyrightControl]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回单个版权信息
	 *  */
	CopyrightControl.prototype._getCopyright = function (id) {
	  if (mapProvider == "baidu") {
	    return this.getCopyright(id);
	  } else {
	    console.error("[CopyrightControl]不支持该地图调用此方法");
	  }
	};

	/**
	 * 返回版权信息列表
	 *  */
	CopyrightControl.prototype._getCopyrightCollection = function () {
	  if (mapProvider == "baidu") {
	    return this.getCopyrightCollection();
	  } else {
	    console.error("[CopyrightControl]不支持该地图调用此方法");
	  }
	};

	exports.default = CopyrightControl;
	module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.MapTypeControl;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类是负责切换地图类型的控件，此类继承Control所有功能。
	 *  */
	function MapTypeControl(options) {
	  Parent.call(this, options);
	}

	(0, _utils.inheritPrototype)(MapTypeControl, Parent);

	exports.default = MapTypeControl;
	module.exports = exports["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.PanoramaControl;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类是负责切换至全景地图的控件，此类继承Control所有功能。
	 *  */
	function PanoramaControl() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(PanoramaControl, Parent);

	exports.default = PanoramaControl;
	module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Overlay;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Overlay;
	}

	/**
	 * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
	 *  */
	function Overlay() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(Overlay, Parent);

	exports.default = Overlay;
	module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Marker;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Marker;
	}

	/**
	 * 此类表示地图上一个图像标注。
	 *  */
	function Marker(point, opts) {
	  Parent.call(this, point, opts);
	}

	(0, _utils.inheritPrototype)(Marker, Parent);

	exports.default = Marker;
	module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Icon;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类表示标注覆盖物所使用的图标。
	 *  */
	function Icon(url, size, opts) {
	  Parent.call(this, url, size, opts);
	}

	(0, _utils.inheritPrototype)(Icon, Parent);

	exports.default = Icon;
	module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.InfoWindow;
	} else if (mapProvider == "kld") {
	  Parent = Careland.InfoWindow;
	}

	/**
	 * 此类表示地图上包含信息的窗口。
	 *  */
	function InfoWindow(content, opts) {
	  Parent.call(this, content, opts);
	}

	(0, _utils.inheritPrototype)(InfoWindow, Parent);

	exports.default = InfoWindow;
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Label;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类表示地图上的文本标注。
	 *  */
	function Label(content, opts) {
	  Parent.call(this, content, opts);
	}

	(0, _utils.inheritPrototype)(Label, Parent);

	exports.default = Label;
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Polyline;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Polyline;
	}

	/**
	 * 使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层。
	 *  */
	function Polyline(points, opts) {
	  Parent.call(this, points, opts);
	}

	(0, _utils.inheritPrototype)(Polyline, Parent);

	exports.default = Polyline;
	module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.IconSequence;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类用于设置polyline上的符号显示。
	 *  */
	function IconSequence(symbol, offset, repeat, fixedRotation) {
	  this.symbol = symbol;
	  this.offset = offset;
	  this.repeat = repeat;
	  this.fixedRotation = fixedRotation;
	  Parent.call(this, symbol, offset, repeat, fixedRotation);
	}

	(0, _utils.inheritPrototype)(IconSequence, Parent);

	exports.default = IconSequence;
	module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Polygon;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Polygon;
	}

	/**
	 * 此类表示一个多边形覆盖物。
	 *  */
	function Polygon(points, opts) {
	  this.points = points;
	  this.opts = opts;
	  Parent.call(this, points, opts);
	}

	(0, _utils.inheritPrototype)(Polygon, Parent);

	exports.default = Polygon;
	module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Circle;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Circle;
	}

	/**
	 * 此类表示地图上的圆覆盖物。
	 *  */
	function Circle(center, radius, opts) {
	  Parent.call(this, center, radius, opts);
	}

	(0, _utils.inheritPrototype)(Circle, Parent);

	exports.default = Circle;
	module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.GroundOverlay;
	} else if (mapProvider == "kld") {}

	function GroundOverlay(bounds, opts) {
	  Parent.call(this, bounds, opts);
	}

	(0, _utils.inheritPrototype)(GroundOverlay, Parent);

	exports.default = GroundOverlay;
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.PointCollection;
	} else if (mapProvider == "kld") {}

	function PointCollection(points, opts) {
	  Parent.call(this, points, opts);
	}

	(0, _utils.inheritPrototype)(PointCollection, Parent);

	exports.default = PointCollection;
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Hotspot;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Hotspot;
	}

	function Hotspot(position, opts) {
	  Parent.call(this, position, opts);
	}

	(0, _utils.inheritPrototype)(Hotspot, Parent);

	exports.default = Hotspot;
	module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Symbol;
	} else if (mapProvider == "kld") {}

	function _Symbol(path, opts) {
	  this.path = path;
	  this.opts = opts;
	  Parent.call(this, path, opts);
	}

	(0, _utils.inheritPrototype)(_Symbol, Parent);

	exports.default = _Symbol;
	module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.CanvasLayer;
	} else if (mapProvider == "kld") {}

	function CanvasLayer(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(CanvasLayer, Parent);

	exports.default = CanvasLayer;
	module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.ContextMenu;
	} else if (mapProvider == "kld") {
	  Parent = Careland.ContextMenu;
	}

	function ContextMenu() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(ContextMenu, Parent);

	exports.default = ContextMenu;
	module.exports = exports["default"];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.MenuItem;
	} else if (mapProvider == "kld") {
	  Parent = Careland.MenuItem;
	}

	function MenuItem(text, callback, opts) {
	  Parent.call(this, text, callback, opts);
	}

	(0, _utils.inheritPrototype)(MenuItem, Parent);

	exports.default = MenuItem;
	module.exports = exports["default"];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.MapType;
	} else if (mapProvider == "kld") {}

	function MapType(name, layers, opts) {
	  Parent.call(this, name, layers, opts);
	}

	(0, _utils.inheritPrototype)(MapType, Parent);

	exports.default = MapType;
	module.exports = exports["default"];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.TileLayer;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Layer;
	}

	function TileLayer(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(TileLayer, Parent);

	exports.default = TileLayer;
	module.exports = exports["default"];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.TrafficLayer;
	} else if (mapProvider == "kld") {}

	function TrafficLayer(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(TrafficLayer, Parent);

	exports.default = TrafficLayer;
	module.exports = exports["default"];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.CustomLayer;
	} else if (mapProvider == "kld") {}

	function CustomLayer(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(CustomLayer, Parent);

	exports.default = CustomLayer;
	module.exports = exports["default"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.PanoramaCoverageLayer;
	} else if (mapProvider == "kld") {}

	function PanoramaCoverageLayer() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(PanoramaCoverageLayer, Parent);

	exports.default = PanoramaCoverageLayer;
	module.exports = exports["default"];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.LocalSearch;
	} else if (mapProvider == "kld") {
	  Parent = Careland.LocalSearch;
	}

	function LocalSearch(location, opts) {
	  Parent.call(this, location, opts);
	}

	(0, _utils.inheritPrototype)(LocalSearch, Parent);

	exports.default = LocalSearch;
	module.exports = exports["default"];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.TransitRoute;
	} else if (mapProvider == "kld") {
	  Parent = Careland.TransitRoute;
	}

	function TransitRoute(location, opts) {
	  Parent.call(this, location, opts);
	}

	(0, _utils.inheritPrototype)(TransitRoute, Parent);

	exports.default = TransitRoute;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.WalkingRoute;
	} else if (mapProvider == "kld") {}

	function WalkingRoute(location, opts) {
	  Parent.call(this, location, opts);
	}

	(0, _utils.inheritPrototype)(WalkingRoute, Parent);

	exports.default = WalkingRoute;
	module.exports = exports["default"];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.RidingRoute;
	} else if (mapProvider == "kld") {}

	function RidingRoute(location, opts) {
	  Parent.call(this, location, opts);
	}

	(0, _utils.inheritPrototype)(RidingRoute, Parent);

	exports.default = RidingRoute;
	module.exports = exports["default"];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.DrivingRoute;
	} else if (mapProvider == "kld") {
	  Parent = Careland.DrivingRoute;
	}

	function DrivingRoute(location, opts) {
	  Parent.call(this, location, opts);
	}

	(0, _utils.inheritPrototype)(DrivingRoute, Parent);

	exports.default = DrivingRoute;
	module.exports = exports["default"];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Geocoder;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Geocoder;
	}

	function Geocoder() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(Geocoder, Parent);

	exports.default = Geocoder;
	module.exports = exports["default"];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.LocalCity;
	} else if (mapProvider == "kld") {
	  Parent = Careland.LocalCity;
	}

	function LocalCity(opts) {
	  Parent.call(this, opts);
	}

	(0, _utils.inheritPrototype)(LocalCity, Parent);

	exports.default = LocalCity;
	module.exports = exports["default"];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Geolocation;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Geolocation;
	}

	function Geolocation() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(Geolocation, Parent);

	exports.default = Geolocation;
	module.exports = exports["default"];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.BusLineSearch;
	} else if (mapProvider == "kld") {}

	function BusLineSearch(location, options) {
	  Parent.call(this, location, options);
	}

	(0, _utils.inheritPrototype)(BusLineSearch, Parent);

	exports.default = BusLineSearch;
	module.exports = exports["default"];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Autocomplete;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Autocomplete;
	}

	function Autocomplete(options) {
	  Parent.call(this, options);
	}

	(0, _utils.inheritPrototype)(Autocomplete, Parent);

	exports.default = Autocomplete;
	module.exports = exports["default"];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Boundary;
	} else if (mapProvider == "kld") {
	  Parent = Careland.Boundary;
	}

	function Boundary() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(Boundary, Parent);

	exports.default = Boundary;
	module.exports = exports["default"];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Convertor;
	} else if (mapProvider == "kld") {}

	function Convertor() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(Convertor, Parent);

	exports.default = Convertor;
	module.exports = exports["default"];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.Panorama;
	} else if (mapProvider == "kld") {}

	/**
	 * 此类用来展示某位置的全景视图，可以单独放置在一个div容器中，也可以放在Map类的容器中。
	 * @params {String | HTMLElement}   container
	 * @params {PanoramaOptions}        opts
	 * *****************************
	 * PanoramaOptions
	 * navigationControl    {boolean}               是否显示全景的导航控件，默认为true
	 * linksControl         {boolean}               是否显示道路指示控件。默认为true
	 * indoorSceneSwitchControl  {boolean}          是否显示全景室内场景的切换控件，默认为false，仅对室内景生效
	 * albumsControl        {boolean}               是否显示相册控件，默认为false
	 * albumsControlOptions {AlbumsControlOptions}  全景相册控件配置参数
	 * *****************************
	 *  */
	function Panorama(container, opts) {
	  Parent.call(this, container, opts);
	}

	(0, _utils.inheritPrototype)(Panorama, Parent);

	/**
	 * 获取全景中道路指示信息
	 * @return Array<PanoramaLink>
	 *  */
	Panorama.prototype._getLinks = function () {
	  if (mapProvider == "baidu") {
	    return this.getLinks();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 获取当前全景的id
	 * @return String
	 *  */
	Panorama.prototype._getId = function () {
	  if (mapProvider == "baidu") {
	    return this.getId();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 获取当前全景的位置，通过经纬度描述
	 * @return Point
	 *  */
	Panorama.prototype._getPosition = function () {
	  if (mapProvider == "baidu") {
	    return this.getPosition();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 获取当前全景的视角
	 * @return PanoramaPov
	 *  */
	Panorama.prototype._getPov = function () {
	  if (mapProvider == "baidu") {
	    return this.getPov();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 获取当前全景的级别
	 * @return Number
	 *  */
	Panorama.prototype._getZoom = function () {
	  if (mapProvider == "baidu") {
	    return this.getZoom();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置全景的id
	 * @params {String} id
	 *  */
	Panorama.prototype._setId = function (id) {
	  if (mapProvider == "baidu") {
	    return this.setId(id);
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置全景的位置
	 * @params {Point} position
	 *  */
	Panorama.prototype._setPosition = function (position) {
	  if (mapProvider == "baidu") {
	    return this.setPosition(position);
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置全景的视角
	 * @params {PanoramaPov}    pov
	 *  */
	Panorama.prototype._setPov = function (pov) {
	  if (mapProvider == "baidu") {
	    return this.setPov(pov);
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置全景的级别
	 * @params {Number}   zoom
	 *  */
	Panorama.prototype._setZoom = function (zoom) {
	  if (mapProvider == "baidu") {
	    return this.setZoom(zoom);
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 开启鼠标滚轮缩放功能。仅对PC上有效
	 *  */
	Panorama.prototype._enableScrollWheelZoom = function () {
	  if (mapProvider == "baidu") {
	    return this.enableScrollWheelZoom();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 关闭鼠标滚轮缩放功能
	 *  */
	Panorama.prototype._disableScrollWheelZoom = function () {
	  if (mapProvider == "baidu") {
	    return this.disableScrollWheelZoom();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 显示全景
	 *  */
	Panorama.prototype._show = function () {
	  if (mapProvider == "baidu") {
	    return this.show();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 隐藏全景
	 *  */
	Panorama.prototype._hide = function () {
	  if (mapProvider == "baidu") {
	    return this.hide();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 全景场景内添加覆盖物
	 * @params {PanoramaLabel}   overlay
	 *  */
	Panorama.prototype._addOverlay = function (overlay) {
	  if (mapProvider == "baidu") {
	    return this.addOverlay(overlay);
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 删除全景内的覆盖物
	 * @params {PanoramaLabel} overlay
	 *  */
	Panorama.prototype._removeOverlay = function (overlay) {
	  if (mapProvider == "baidu") {
	    return this.removeOverlay(overlay);
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 获取全景的类型（室外景返回BMAP_PANORAMA_STREET_SCENE、室内景返回BMAP_PANORAMA_INDOOR_SCENE）
	 * @return  Enum PanoramaSceneType
	 *  */
	Panorama.prototype._getSceneType = function () {
	  if (mapProvider == "baidu") {
	    return this.getSceneType();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置全景可配置参数
	 * @params {PanoramaOptions}   opts
	 *  */
	Panorama.prototype._setOptions = function (opts) {
	  if (mapProvider == "baidu") {
	    return this.setOptions(opts);
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	/**
	 * 设置全景外景场景点内可见的POI类型，默认为隐藏所有类型poi
	 *  */
	Panorama.prototype._setPanoramaPOIType = function () {
	  if (mapProvider == "baidu") {
	    return this.setPanoramaPOIType();
	  } else {
	    console.error("[]不支持该地图调用此方法");
	  }
	};

	exports.default = Panorama;
	module.exports = exports["default"];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.PanoramaService;
	} else if (mapProvider == "kld") {}

	function PanoramaService() {
	  Parent.call(this);
	}

	(0, _utils.inheritPrototype)(PanoramaService, Parent);

	exports.default = PanoramaService;
	module.exports = exports["default"];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(2);

	var Parent = null;
	var mapProvider = (0, _utils.getMapProvider)();
	if (mapProvider == "baidu") {
	  Parent = BMap.PanoramaLabel;
	} else if (mapProvider == "kld") {}

	function PanoramaLabel(content, opts) {
	  Parent.call(this, content, opts);
	}

	(0, _utils.inheritPrototype)(PanoramaLabel, Parent);

	exports.default = PanoramaLabel;
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;