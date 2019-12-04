import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.GeolocationControl;
} else if (mapProvider == "kld") {
}

/**
 * 此类是负责进行地图定位的控件，使用html5浏览器定位功能，此类继承Control所有功能。
 *  */
function GeolocationControl(type) {
  Parent.call(this, type);
}

inheritPrototype(GeolocationControl, Parent);

/**
 * 开始进行定位
 * @return {none}
 *  */
GeolocationControl.prototype._location = function() {
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
GeolocationControl.prototype._getAddressComponent = function() {
  if (mapProvider == "baidu") {
    return this.getAddressComponent();
  } else {
    console.error("[GeolocationControl]不支持该地图调用此方法");
  }
};

export default GeolocationControl;
