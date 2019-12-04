import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Control;
} else if (mapProvider == "kld") {
  Parent = Careland.Control;
}

/**
 * 此类是所有控件的基类，您可以通过此类来实现自定义控件。
 * 所有控件均包含Control类的属性、方法和事件。
 * 通过Map.addControl()方法可将控件添加到地图上。
 * 
 *  */
function Control() {
  Parent.call(this);
}

inheritPrototype(Control, Parent);

export default Control;
