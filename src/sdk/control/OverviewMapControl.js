import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.OverviewMapControl;
} else if (mapProvider == "kld") {
  Parent = Careland.Overview;
}

/**
 * 此类表示缩略地图控件。
 * @params { OverviewMapControlOptions}    opts
 *  */
function OverviewMapControl(opts) {
  Parent.call(this, opts);
}

inheritPrototype(OverviewMapControl, Parent);

/**
 * 切换缩略地图控件的开合状态
 *  */
OverviewMapControl.prototype._changeView = function() {
  if (mapProvider == "baidu") {
    return this.changeView(otherSize);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 设置缩略地图的大小
 *  */
OverviewMapControl.prototype._setSize = function(size) {
  if (mapProvider == "baidu") {
    return this.setSize(size);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 返回缩略地图的大小
 *  */
OverviewMapControl.prototype._getSize = function() {
  if (mapProvider == "baidu") {
    return this.getSize(size);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

export default OverviewMapControl;
