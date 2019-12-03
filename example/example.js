import {
  Map,
  //
  Point,
  Pixel,
  Bounds,
  Size,

  //
  Control,
  NavigationControl,
  GeolocationControl,
  OverviewMapControl,
  ScaleControl,
  CopyrightControl,
  MapTypeControl,
  PanoramaControl,
  //
  Overlay,
  Marker,
  Icon,
  InfoWindow,
  Label,
  Polyline,
  IconSequence,
  Polygon,
  Circle,
  GroundOverlay,
  PointCollection,
  Hotspot,
  Symbol,
  CanvasLayer,
  //
  ContextMenu,
  MenuItem,
  //
  MapType,
  //
  TileLayer,
  TrafficLayer,
  CustomLayer,
  PanoramaCoverageLayer,
  //
  LocalSearch,
  TransitRoute,
  WalkingRoute,
  RidingRoute,
  DrivingRoute,
  Geocoder,
  LocalCity,
  Geolocation,
  BusLineSearch,
  Autocomplete,
  Boundary,
  Convertor,
  //
  Panorama,
  PanoramaService,
  PanoramaLabel
} from "../src/fhmap";
import utils from "../src/utils";
var map = new Map({
  minZoom: 4,
  maxZoom: 8
});
map._init({ success: () => {} });

map._addControl(
  new MapTypeControl({
    mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
  })
);
// map._setCurrentCity("北京");
map._enableScrollWheelZoom();

setTimeout(function(){
    map._panTo(new Point(113.262232,23.154345));   //两秒后移动到广州
}, 2000);

// var point1 = new Point(116.404, 39.915);
// console.log("point1", point1);

// var myIcon = new BMap.Icon("http://api0.map.bdimg.com/images/marker_red_sprite.png", new BMap.Size(300, 157));
// var marker2 = new BMap.Marker(point1, { icon: myIcon }); // 创建标注
// map.addOverlay(marker2);
