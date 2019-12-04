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
  maxZoom: 18,
  enableMapClick: false
});
map._init({ success: () => {} });

console.log(map);


var p1 = new Point(100, 100);
console.log(p1);
var pixel2 = new Pixel(100, 100);
alert(p1._equals(pixel2));
