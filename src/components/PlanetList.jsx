import React from "react";
import PlanetCard from "./PlanetCard";

export default function PlanetList({planets}) {

	return (
    <>
		<div className="gallery">
      	{planets.map(planet => (
        <img
          key={planet.id}
          src={`/assets/planets/${planet.id}.jpg`}
          alt={planet.englishName}
          className="planet-img"
          onClick={() => onSelect(planet.id)}
        />
      	))}
    	</div>  
		 
      	<PlanetCard />     
    </>
  );
}