var context = {
  TNLOS_ICCP19: {
    imgURL: "img/TNLOS_ICCP19/thumbnail.jpg",
    pubURL: "TNLOS_ICCP19.htm",
    Title: "Thermal Non-Line of Sight Imaging | ICCP 2019",
    Description: "A novel non-line of sight imaging framework with long-wave infared."
  },
  polarized3D: {
    imgURL:"img/polarized3D/thumbnail.jpg", 
    pubURL: "polarized3D.htm",
    Title: "Polarized 3D: Depth Sensing with Polarization Cues",
    Description: "Coarse depth maps can be enhanced by using the shape information from polarization cues. We propose a framework to combine surface normals from polarization (hereafter polarization normals) with an aligned depth map."
  },
  MacroInter: {
    imgURL: "img/MacroInter/thumbnail.jpg",
    pubURL: "MacroInter.htm",
    Title: "Macroscopic Interferometry: Rethinking Depth Estimation with Frequency-Domain Time-of-Flight",
    Description: "This paper examines an alternative ToF architecture, inspired by micron-scale, microscopic interferometry, that relies only on frequency sampling: we refer to our proposed macroscopic technique as Frequency- Domain Time of Flight (FD-ToF)."
  },
  Beat: {
    imgURL: "img/beat/thumbnail.jpg",
    pubURL: "beat.htm",
    Title: "Cascaded LIDAR using Beat Notes",
    Description: "We study LIDAR using filtering elements as a potential way to extend the reach of existing pathlength imaging systems. Our goals are similar to interferometric and coherent methods, but we aim to study a fusion of electronic and optical coherence. Please refer to the FAQ regarding comparisons to existing work.",
  }, 
  Occluded: {
    imgURL: "./img/occluded/thumbnail.jpg",
    pubURL: "occluded.htm",
    Title: "Occluded Imaging with Time of Flight Sensors",
    Description: "Localizing a moving target in real-time. (a) The ping pong ball is outside the line of sight of the camera and moves horizontally. The camera measures backscattered reflections from the wall. (b) A conventional video of the object in motion. Here, three frames of the video are shown at times 0, 1 and 2 seconds where the ball position is 30, 40, and 50 cm. (c) Our technique is able to find the location of the target in real time. Please see supplementary video.",
  },
  nanophoto: {
    imgURL: "./img/nanophoto/thumbnail.jpg",
    pubURL: "nanophoto.htm",
    Title: "Coded Time of Flight Cameras: Sparse Deconvolution to Address Multipath Interference and Recover Time Profiles",
    Description: "We re-purpose the conventional time of flight device for a new goal: to recover per-pixel sparse time profiles expressed as a sequence of impulses. With this modification, we show that we can not only address multipath interference but also enable new applications such as recovering depth of near-transparent surfaces, looking through diffusers and creating time-profile movies of sweeping light.",
  },
  demux: {
    imgURL: "./img/demux/thumbnail.jpg",
    pubURL: "demux.htm",
    Title: "Demultiplexing Illumination via Low Cost Sensing and Nanosecond Coding",
    Description: "In this paper we propose a fusion of two popular contexts, time of flight range cameras and illumination multiplexing. Time of flight cameras are a low cost, consumer-oriented technology capable of acquiring range maps at 30 frames per second. Such cameras have a natural connection to conventional illumination multiplexing strategies as both paradigms rely on the capture of multiple shots and synchronized illumination. ",
  },
}

var source = document.getElementById("publication-template").innerHTML;
var template = Handlebars.compile(source);

for (var publication in context) {
  var html = template(context[publication]);
  $("#" + publication + "Publication").before(html);
}
