import mercuryImage from "../assets/planets/mercury1.PNG";
import venusImage from "../assets/planets/venus1.PNG";
import marsImage from "../assets/planets/mars1.PNG";
import jupiterImage from "../assets/planets/jupiter1.PNG";
import saturnImage from "../assets/planets/saturn1.PNG";
import uranusImage from "../assets/planets/uranus1.PNG";
import neptuneImage from "../assets/planets/neptune1.PNG";
import plutoImage from "../assets/planets/pluto1.PNG";

const destinations = [
  {
    id: "mercury",
    name: "Mercury",
    image: mercuryImage,
    embedUrl: "https://sketchfab.com/3d-models/mercury-enhanced-color-5931d130a5204419b3323dd41f3506b1/embed",
    alt: "interactive 3D model of the mercury presented by sketchfab",
    apodDate: "2024-09-16"
  },
  {
    id: "venus",
    name: "Venus",
    image: venusImage,
    embedUrl: "https://sketchfab.com/3d-models/venus-b306aaadbf2b4fcea1afa2db5ed75b4f/embed",
    apodDate: "2025-05-11"
  },
  {
    id: "mars",
    name: "Mars",
    image: marsImage,
    embedUrl: "https://sketchfab.com/3d-models/mars-7b14d8d8a5b94626a4b2a8a4455297d6/embed",
    apodDate: "2025-07-15"
  },
  {
    id: "jupiter",
    name: "Jupiter",
    image: jupiterImage,
    embedUrl: "https://sketchfab.com/3d-models/jupiter-c5275eb96af245e4a8453837ac728a62/embed",
    apodDate: "2025-04-19"
  },
  {
    id: "saturn",
    name: "Saturn",
    image: saturnImage,
    embedUrl: "https://sketchfab.com/3d-models/saturno-v11-5d546029721640a9ac332fb68b959e49/embed",
    apodDate: "2025-02-23"
  },
  {
    id: "uranus",
    name: "Uranus",
    image: uranusImage,
    embedUrl: "https://sketchfab.com/3d-models/uranus-b488282fa28344009fa8c8cdb3384456/embed",
    apodDate: "2023-12-29"
  },
  { 
    id: "neptune",
    name: "Neptune",
    image: neptuneImage,
    embedUrl: "https://sketchfab.com/3d-models/neptune-8c6dc96f47ab4d798a1cb2d827da3fbe/embed",
    apodDate: "2024-11-09"
  },
  {
    id: "pluton",
    name: "Pluto",
    image: plutoImage,
    embedUrl: "https://sketchfab.com/3d-models/pluto-0840325e536d47bdb6ed4b867d55b5c1/embed",
    apodDate: "2021-08-01"
  },

];

export default destinations;