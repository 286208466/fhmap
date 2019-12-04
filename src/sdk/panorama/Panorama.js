import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Panorama;
} else if (mapProvider == "kld") {
}

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

inheritPrototype(Panorama, Parent);

/**
 * 获取全景中道路指示信息
 * @return Array<PanoramaLink>
 *  */
Panorama.prototype._getLinks = function() {
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
Panorama.prototype._getId = function() {
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
Panorama.prototype._getPosition = function() {
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
Panorama.prototype._getPov = function() {
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
Panorama.prototype._getZoom = function() {
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
Panorama.prototype._setId = function(id) {
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
Panorama.prototype._setPosition = function(position) {
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
Panorama.prototype._setPov = function(pov) {
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
Panorama.prototype._setZoom = function(zoom) {
  if (mapProvider == "baidu") {
    return this.setZoom(zoom);
  } else {
    console.error("[]不支持该地图调用此方法");
  }
};

/**
 * 开启鼠标滚轮缩放功能。仅对PC上有效
 *  */
Panorama.prototype._enableScrollWheelZoom = function() {
  if (mapProvider == "baidu") {
    return this.enableScrollWheelZoom();
  } else {
    console.error("[]不支持该地图调用此方法");
  }
};

/**
 * 关闭鼠标滚轮缩放功能
 *  */
Panorama.prototype._disableScrollWheelZoom = function() {
  if (mapProvider == "baidu") {
    return this.disableScrollWheelZoom();
  } else {
    console.error("[]不支持该地图调用此方法");
  }
};

/**
 * 显示全景
 *  */
Panorama.prototype._show = function() {
  if (mapProvider == "baidu") {
    return this.show();
  } else {
    console.error("[]不支持该地图调用此方法");
  }
};

/**
 * 隐藏全景
 *  */
Panorama.prototype._hide = function() {
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
Panorama.prototype._addOverlay = function(overlay) {
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
Panorama.prototype._removeOverlay = function(overlay) {
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
Panorama.prototype._getSceneType = function() {
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
Panorama.prototype._setOptions = function(opts) {
  if (mapProvider == "baidu") {
    return this.setOptions(opts);
  } else {
    console.error("[]不支持该地图调用此方法");
  }
};

/**
 * 设置全景外景场景点内可见的POI类型，默认为隐藏所有类型poi
 *  */
Panorama.prototype._setPanoramaPOIType = function() {
  if (mapProvider == "baidu") {
    return this.setPanoramaPOIType();
  } else {
    console.error("[]不支持该地图调用此方法");
  }
};

export default Panorama;
