import React from "react";
import { Outlet, useEffect } from "react-router-dom";
import DestinationGallery from "../components/DestinationGallery";
import DestinationInfo from "../components/DestinationInfo";

export default function Destinations() {
  return (
    <div>
      <h1>Scout out some stellar cosmic sanctuaries</h1>
      <DestinationGallery />
      <Outlet /> {/*to pass state/context to nested component*/}
    </div>
  );
}
