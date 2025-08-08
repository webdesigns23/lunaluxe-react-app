import React from "react";
import PlanetCard from "./PlanetCard";

export default function PlanetGallery({planets}) {

	return (
    <>
		<div className="gallery">
      	{planets.map((planet) => (
			<div key={planet.id} className="gallery-item">
				<PlanetCard planet={planet}/>
			</div>
		))}	
    	</div>     
    </>
  );
}