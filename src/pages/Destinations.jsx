import React from "react";
import { Outlet } from "react-router-dom";

export default function Destinations() {
  return (
    <div>
      <h1>Destinations Page</h1>
        {/*Destination Gallery Link*/}
        <Outlet /> {/*for destination Info will go here*/}
    </div>
  );
}
