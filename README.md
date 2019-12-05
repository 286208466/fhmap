# fhmap  

fhmap主要是用来使项目中地图功能的兼容性和扩展性更强，代码更容易维护，同时使切换地图的开发工作任务更少，成本更低

安装  

    npm install fhmap --save  


使用  

    //整个引入
    import fhmap from 'fhmap'
    
    //部分引入  
    import {Map, Point} from 'fhmap'  

fhmap类概览  

- 核心类：  
>`Map`
- 基础类：
>`Point`、`Pixel`、`Bounds`、`Size`  
- 控件类：
>`Control`、`NavigationControl`、`GeolocationControl`、`OverviewMapControl`、`ScaleControl`、`CopyrightControl`、`MapTypeControl`、`PanoramaControl`  
- 覆盖物类：
>`Overlay`、`Marker`、`Icon`、`InfoWindow`、`Label`、`Polyline`、`IconSequence`、`Polygon`、`Circle`、`GroundOverlay`、`PointCollection`、`Hotspot`、`Symbol`、`CanvasLayer ` 
- 右键菜单类：
>`ContextMenu`、`MenuItem`  
- 地图类型类：
>`MapType`  
- 地图图层类：
>`TileLayer`、`TrafficLayer`、`CustomLayer`、`PanoramaCoverageLayer`  
- 服务类：
>`LocalSearch`、`TransitRoute`、`WalkingRoute`、`RidingRoute`、`DrivingRoute`、`Geocoder`、`LocalCity`、`Geolocation`、`BusLineSearch`、`Autocomplete`、`Boundary`、`Convertor`  
- 全景类：
>`Panorama`、`PanoramaService`、`PanoramaLabel`
- 地图工具类：
>`tools`  
- 地图接口类：
>`apis`
- 工具类：
>`utils`  

###关于地图差异性解决的建议  

由于每个地图厂商提供的地图类和方法名称可能不一致，建议在项目中新建一个`allmap.js`

     //allmap.js
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
	  PanoramaLabel,
	  //
	  mapTools,
	  //
	  mapApis,
	  //
	  utils
	} from 'fhmap' 
	
	let mapProvider = getMapProvider();
	//为避免和对象原有方法冲突，建议在方法名称前加下划线_区分
    Pixel.prototype._equals = function(otherPixel) {
	  if (mapProvider == "baidu") {
	    return this.equals(otherPixel);
	  } else {
	    console.error("[Pixel]不支持该地图调用此方法");
	  }
	};
	
	//...  
	
	export {
	  ...
	}

业务代码中使用  

    import {Map, Point} from './allmap'
    ...


###地图类的支持性如下 

| 类 | 百度 | 凯立德 | 图盟 |
| ----| ---- | ---- | ---- |
| （核心类）Map | 支持 | 支持 | |
| （基础类）Point | 支持 | 支持 | |
| （基础类）Pixel | 支持 | 支持 | |
| （基础类）Bounds | 支持 | 支持 | |
| （基础类）Size | 支持 | 支持 | |
| （控件类）Control | 支持 | 支持 | |
| （控件类）NavigationControl | 支持 |  | |
| （控件类）GeolocationControl | 支持 |  | |
| （控件类）OverviewMapControl | 支持 |  | |
| （控件类）ScaleControl | 支持 |  | |
| （控件类）CopyrightControl | 支持 |  | |
| （控件类）MapTypeControl | 支持 |  | |
| （控件类）PanoramaControl | 支持 |  | |
| （覆盖物类）Overlay | 支持 |  | |
| （覆盖物类）Marker | 支持 |  | |
| （覆盖物类）Icon | 支持 |  | |
| （覆盖物类）InfoWindow | 支持 |  | |
| （覆盖物类）Label | 支持 |  | |
| （覆盖物类）Polyline | 支持 |  | |
| （覆盖物类）IconSequence | 支持 |  | |
| （覆盖物类）Polygon | 支持 |  | |
| （覆盖物类）Circle | 支持 |  | |
| （覆盖物类）GroundOverlay | 支持 |  | |
| （覆盖物类）PointCollection | 支持 |  | |
| （覆盖物类）Hotspot | 支持 |  | |
| （覆盖物类）Symbol | 支持 |  | |
| （覆盖物类）CanvasLayer | 支持 |  | |
| （右键菜单类）ContextMenu | 支持 |  | |
| （右键菜单类）MenuItem | 支持 |  | |
| （地图类型类）MapType | 支持 |  | |
| （地图图层类）TileLayer | 支持 |  | |
| （地图图层类）TrafficLayer | 支持 |  | |
| （地图图层类）CustomLayer | 支持 |  | |
| （地图图层类）PanoramaCoverageLayer | 支持 |  | |
| （服务类）LocalSearch | 支持 |  | |
| （服务类）TransitRoute | 支持 |  | |
| （服务类）WalkingRoute | 支持 |  | |
| （服务类）RidingRoute | 支持 |  | |
| （服务类）DrivingRoute | 支持 |  | |
| （服务类）Geocoder | 支持 |  | |
| （服务类）LocalCity | 支持 |  | |
| （服务类）Geolocation | 支持 |  | |
| （服务类）BusLineSearch | 支持 |  | |
| （服务类）Autocomplete | 支持 |  | |
| （服务类）Boundary | 支持 |  | |
| （服务类）Convertor | 支持 |  | |
| （全景类）Panorama | 支持 |  | |
| （全景类）PanoramaService | 支持 |  | |
| （全景类）PanoramaLabel | 支持 |  | |

