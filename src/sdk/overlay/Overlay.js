import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Overlay;
} else if (mapProvider == "kld") {
  Parent = Careland.Overlay;
}

/**
 * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
 *  */
function Overlay() {
  Parent.call(this);
}

inheritPrototype(Overlay, Parent);

export default Overlay;
