import bdapi from "../../class/baidu/index";
import { inheritPrototype } from "../../utils/index";

let Parent = null;

if (window.BMap) {
  Parent = bdapi.Pixel;
}

function Pixel(x, y) {
  this.x = x;
  this.y = y;
  Parent.call(this, x, y);
}

inheritPrototype(Pixel, Parent);

export default Pixel;
