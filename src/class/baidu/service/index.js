const LocalSearch = window.BMap ? BMap.LocalSearch : null;
const TransitRoute = window.BMap ? BMap.TransitRoute : null;
const WalkingRoute = window.BMap ? BMap.WalkingRoute : null;
const RidingRoute = window.BMap ? BMap.RidingRoute : null;
const DrivingRoute = window.BMap ? BMap.DrivingRoute : null;
const Geocoder = window.BMap ? BMap.Geocoder : null;
const LocalCity = window.BMap ? BMap.LocalCity : null;
const Geolocation = window.BMap ? BMap.Geolocation : null;
const BusLineSearch = window.BMap ? BMap.BusLineSearch : null;
const Autocomplete = window.BMap ? BMap.Autocomplete : null;
const Boundary = window.BMap ? BMap.Boundary : null;
const Convertor = window.BMap ? BMap.Convertor : null;
export default {
  LocalSearch: LocalSearch,
  TransitRoute: TransitRoute,
  WalkingRoute: WalkingRoute,
  RidingRoute: RidingRoute,
  DrivingRoute: DrivingRoute,
  Geocoder: Geocoder,
  LocalCity: LocalCity,
  Geolocation: Geolocation,
  BusLineSearch: BusLineSearch,
  Autocomplete: Autocomplete,
  Boundary: Boundary,
  Convertor: Convertor
};
