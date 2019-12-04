const Panorama = window.BMap ? BMap.Panorama : null;
const PanoramaService = window.BMap ? BMap.PanoramaService : null;
const PanoramaLabel = window.BMap ? BMap.PanoramaLabel : null;
export default {
  Panorama: Panorama,
  PanoramaService: PanoramaService,
  PanoramaLabel: PanoramaLabel
};
