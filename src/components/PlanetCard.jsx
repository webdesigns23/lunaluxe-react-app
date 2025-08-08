import React from "react";

export default function PlanetCard() {

	return (
    <div className="planet-details">
      <h2>{planet.englishName}</h2>
      <p>Gravity:{planet.gravity} m/s²</p>
      <p>Radius: {planet.meanRadius} km</p>
      <p>Moons: {planet.moons?.length || 0}</p>
      <p>Distance from Sun: {planet.semimajorAxis.toLocaleString()} km</p>
    </div>
  );
}