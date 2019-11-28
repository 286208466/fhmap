import utils from "../../utils";
import method from "./method";
console.log(method);
/**
 * 初始化
 *
 * */
function init(options = {}) {
  var mapId = options.mapId || "map";
  var map;

  var defaultOpts = {
    minZoom: 1,
    maxZoom: 18,
    mapType: BMAP_NORMAL_MAP,
    enableAutoResize: true,
    enableMapClick: true
  };
  if (window.BMap) {
    map = new BMap.Map(mapId);
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  } else {
    utils.error("[Map][init][不支持]");
  }
  window["_" + mapId] = map;
  options && options.success && options.success();
  return map;
}

/**
 * 销毁
 *
 * */
function destroy(mapId) {
  mapId = mapId || "map";
  window["_" + mapId] = null;
}

let map = {
  init,
  destroy
};

Object.keys(method).map((key) => {
  map[key] = method[key];
});
export default map;
