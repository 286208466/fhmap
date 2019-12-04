import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.ScaleControl;
} else if (mapProvider == "kld") {
  Parent = Careland.Scale;
}

/**
 * 此类表示比例尺控件。
 *
 *  */
function ScaleControl(opts) {
  Parent.call(this, opts);
}

inheritPrototype(ScaleControl, Parent);

/**
 * 返回比例尺单位制
 * @return {LengthUnit}
 *  */
ScaleControl.prototype._getUnit = function() {
  if (mapProvider == "baidu") {
    return this.getUnit();
  } else {
    console.error("[ScaleControl]不支持该地图调用此方法");
  }
};

/**
 * 设置比例尺单位制
 * @return {none}
 *  */
ScaleControl.prototype._setUnit = function(unit) {
  if (mapProvider == "baidu") {
    return this.setUnit(unit);
  } else {
    console.error("[ScaleControl]不支持该地图调用此方法");
  }
};

export default ScaleControl;
