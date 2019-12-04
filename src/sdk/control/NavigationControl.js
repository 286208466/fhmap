import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.NavigationControl;
} else if (mapProvider == "kld") {
  Parent = Careland.Navigation;
}

/**
 * 此类表示地图的平移缩放控件，可以对地图进行上下左右四个方向的平移和缩放操作。
 * @params {NavigationControlOptions}   opts
 * **********************************
 * NavigationControlOptions
 * anchor           {ControlAnchor}         控件的停靠位置
 * offset           {Size}                  控件的水平偏移值
 * type             {NavigationControlType} 平移缩放控件的类型
 * showZoomInfo     {Boolean}               是否显示级别提示信息
 * enableGeolocation{Boolean}               控件是否集成定位功能，默认为false
 * **********************************
 *  */
function NavigationControl(opts) {
  Parent.call(this, opts);
}

inheritPrototype(NavigationControl, Parent);

NavigationControl.prototype._getType = function() {
  if (mapProvider == "baidu") {
    return this.getType();
  } else {
    console.error("[NavigationControl]不支持该地图调用此方法");
  }
};

NavigationControl.prototype._setType = function(type) {
  if (mapProvider == "baidu") {
    return this.setType(type);
  } else {
    console.error("[NavigationControl]不支持该地图调用此方法");
  }
};

export default NavigationControl;
