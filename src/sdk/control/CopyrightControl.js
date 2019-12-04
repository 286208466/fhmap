import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.CopyrightControl;
} else if (mapProvider == "kld") {
}

/**
 * 此类表示版权控件，您可以在地图上添加自己的版权信息。
 * 每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。
 *  */
function CopyrightControl(opts) {
  Parent.call(this, opts);
}

inheritPrototype(CopyrightControl, Parent);

/**
 * 添加版权信息
 *  */
CopyrightControl.prototype._addCopyright = function(copyright) {
  if (mapProvider == "baidu") {
    return this.addCopyright(copyright);
  } else {
    console.error("[CopyrightControl]不支持该地图调用此方法");
  }
};

/**
 * 移除版权信息
 *  */
CopyrightControl.prototype._removeCopyright = function(id) {
  if (mapProvider == "baidu") {
    return this.removeCopyright(id);
  } else {
    console.error("[CopyrightControl]不支持该地图调用此方法");
  }
};

/**
 * 返回单个版权信息
 *  */
CopyrightControl.prototype._getCopyright = function(id) {
  if (mapProvider == "baidu") {
    return this.getCopyright(id);
  } else {
    console.error("[CopyrightControl]不支持该地图调用此方法");
  }
};

/**
 * 返回版权信息列表
 *  */
CopyrightControl.prototype._getCopyrightCollection = function() {
  if (mapProvider == "baidu") {
    return this.getCopyrightCollection();
  } else {
    console.error("[CopyrightControl]不支持该地图调用此方法");
  }
};

export default CopyrightControl;
