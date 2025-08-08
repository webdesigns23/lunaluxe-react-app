import React from "react";
import PlanetCard from "./PlanetCard";

export default function PlanetGallery({planets}) {

	return (
    <>
		<div className="gallery">
      	{planets.map(planet => (
			<div key={planet.id} className="gallery-item">
				<img
				key={planet.id}
				src={`/assets/planets/${planet.id}.jpg`}
				alt={planet.englishName}
				className="planet-img"
				/>	
			</div>
		))}	
    	</div>  

      	<PlanetCard planet={planet}/>     
    </>
  );
}