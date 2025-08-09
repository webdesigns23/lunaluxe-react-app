import sdImage from "../assets/vessels/star_destroyer.PNG";
import mlImage from "../assets/vessels/millenium_falcon.PNG";
import xImage from "../assets/vessels/x_wing.PNG";
import ssImage from "../assets/vessels/solar_sailer.PNG";
import tfImage from "../assets/vessels/tie_fighter.PNG";
import isImage from "../assets/vessels/imperial_shuttle.PNG";


const vessels = [
  {
    id: 3,
    name: "star destroyer",
    image: sdImage,
    embedUrl: "https://sketchfab.com/models/8ba24769c02b401d88f50655505c92be/embed",
    alt: "interactive 3D model of the star destroyer presented by sketchfab",
  },
   {
    id: 10,
    name: "millenium falcon",
    image: mlImage,
    embedUrl: "https://sketchfab.com/3d-models/millennium-falcon-2c0783d083e44b959c691682b4cb1f16/embed",
    alt: "interactive 3D model of the millenium falcon presented by sketchfab",
  },
   {
    id: 12,
    name: "x-wing",
    image: xImage,
    embedUrl: "https://sketchfab.com/3d-models/x-wing-t-70-f8340a7cf72f4cda86286a68d4581d9e/embed",
    alt: "interactive 3D model of the x wing presented by sketchfab",
  },
   {
    id: 13,
    name: "TIE-fighter",
    image: tfImage,
    embedUrl: "https://sketchfab.com/3d-models/tie-5bcaa60ed5ce4a51b4233aed418f2280/embed",
    alt: "interactive 3D model of the tie fighter presented by sketchfab",
  },
   {
    id: 22,
    name: "Imperial Shuttle",
    image: isImage,
    embedUrl: "https://sketchfab.com/3d-models/imperial-lambda-class-shuttle-ecd88edc4e5f42cc977c265316ed7015/embed",
  },
   {
    id: 58,
    name: "Solar Sailer",
    image: ssImage,
    embedUrl: "https://sketchfab.com/3d-models/solar-sailer-573a4cd70b014e428036b2d803271187/embed",
  },
];

export default vessels