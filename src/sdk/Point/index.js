import bdapi from "../../class/baidu/index";

function Point(lng, lat) {
  this.lng = lng;
  this.lat = lat;
  bdapi.Point.call(this, lng, lat);
}

var F = function() {};
F.prototype = bdapi.Point.prototype;
Point.prototype = new F();
Point.prototype.constructor = Point;

console.log(Point);
console.log(bdapi.Point);
console.log(Point == bdapi.Point);

// function Point(lng, lat) {
//   if (window.BMap) {
//     var temp = new bdapi.Point(lng, lat);
//     for (var k in temp) {
//       this[k] = temp[k];
//     }
//     temp = null;
//   } else {
//     console.error("[Point]不支持");
//   }
// }

export default Point;
