import bdapi from "../../class/baidu/index";
import { inheritPrototype } from "../../utils/index";

let Parent = null;

if (window.BMap) {
  Parent = bdapi.Size;
}

function Size(width, height) {
  this.width = width;
  this.height = height;
  Parent.call(this, width, height);
}

inheritPrototype(Size, Parent);

export default Size;
