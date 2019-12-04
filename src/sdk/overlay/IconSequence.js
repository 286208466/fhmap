import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.IconSequence;
} else if (mapProvider == "kld") {
}

/**
 * 此类用于设置polyline上的符号显示。
 *  */
function IconSequence(symbol, offset, repeat, fixedRotation) {
  this.symbol = symbol;
  this.offset = offset;
  this.repeat = repeat;
  this.fixedRotation = fixedRotation;
  Parent.call(this, symbol, offset, repeat, fixedRotation);
}

inheritPrototype(IconSequence, Parent);

export default IconSequence;
