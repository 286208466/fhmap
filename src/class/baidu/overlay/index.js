const Overlay = window.BMap ? BMap.Overlay : null;
const Marker = window.BMap ? BMap.Marker : null;
const Icon = window.BMap ? BMap.Icon : null;
const InfoWindow = window.BMap ? BMap.InfoWindow : null;
const Label = window.BMap ? BMap.Label : null;
const Polyline = window.BMap ? BMap.Polyline : null;
const IconSequence = window.BMap ? BMap.IconSequence : null;
const Polygon = window.BMap ? BMap.Polygon : null;
const Circle = window.BMap ? BMap.Circle : null;
const GroundOverlay = window.BMap ? BMap.GroundOverlay : null;
const PointCollection = window.BMap ? BMap.PointCollection : null;
const Hotspot = window.BMap ? BMap.Hotspot : null;
const _Symbol = window.BMap ? BMap.Symbol : null;
const CanvasLayer = window.BMap ? BMap.CanvasLayer : null;

export default {
  Overlay: Overlay,
  Marker: Marker,
  Icon: Icon,
  InfoWindow: InfoWindow,
  Label: Label,
  Polyline: Polyline,
  IconSequence: IconSequence,
  Polygon: Polygon,
  Circle: Circle,
  GroundOverlay: GroundOverlay,
  PointCollection: PointCollection,
  Hotspot: Hotspot,
  Symbol: _Symbol,
  CanvasLayer: CanvasLayer
};
