const Control = window.BMap ? BMap.Control : null;
const NavigationControl = window.BMap ? BMap.NavigationControl : null;
const GeolocationControl = window.BMap ? BMap.GeolocationControl : null;
const OverviewMapControl = window.BMap ? BMap.OverviewMapControl : null;
const ScaleControl = window.BMap ? BMap.ScaleControl : null;
const CopyrightControl = window.BMap ? BMap.CopyrightControl : null;
const MapTypeControl = window.BMap ? BMap.MapTypeControl : null;
const PanoramaControl = window.BMap ? BMap.PanoramaControl : null;
export default {
  Control: Control,
  NavigationControl: NavigationControl,
  GeolocationControl: GeolocationControl,
  OverviewMapControl: OverviewMapControl,
  ScaleControl: ScaleControl,
  CopyrightControl: CopyrightControl,
  MapTypeControl: MapTypeControl,
  PanoramaControl: PanoramaControl
};
