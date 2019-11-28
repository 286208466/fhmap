export default {
    //地图允许展示的最小级别
  minZoom: 1,
  //地图允许展示的最大级别
  maxZoom: 18,
  //地图类型，默认为BMAP_NORMAL_MAP
  mapType: BMAP_NORMAL_MAP,
  //是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态
  //BMAP_NORMAL_MAP     此地图类型展示普通街道视图
  //BMAP_SATELLITE_MAP  此地图类型展示卫星视图
  //BMAP_HYBRID_MAP     此地图类型展示卫星和路网的混合视图
  enableHighResolution: false,
  //是否自动适应地图容器变化，默认启用
  enableAutoResize: true,
  //是否开启底图可点功能，默认启用
  enableMapClick: true
};
