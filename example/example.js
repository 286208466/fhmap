import { Map, Point } from "../src/fhmap";
import utils from "../src/utils";
var map = new Map({
  success: () => {}
});
map.init();

console.log("map", map);

var point1 = new Point(116.404, 39.915);
console.log("point", point1);
alert(typeof point1.equals);

var point2 = new BMap.Point(116.404, 39.915);
console.log('point2', point2);
