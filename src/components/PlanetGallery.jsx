import React from "react";
import PlanetCard from "./PlanetCard";
import TempCheck from "./TempCheck";

export default function PlanetGallery({planets}) {

	return (
    <>
		<TempCheck />
		
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