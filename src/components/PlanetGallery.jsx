import { useState } from "react";
import PlanetCard from "./PlanetCard";
import TempCheck from "./TempCheck";
import GravityCheck from "./GravityCheck";

export default function PlanetGallery({planets}) {
	const [tempFilter, setTempFilter] = useState("all");
	const [gravFilter, setGravFilter] = useState("all");

	
	const filteredPlanets = planets.filter((planet) => {
		//Temperature Filter
		if (tempFilter === "all") return true;
		if (tempFilter === "hot") return planet.avgTemp >= 200;
		if (tempFilter === "cold") return planet.avgTemp < 200;
		return true;

		//Gravity Filter
		if (gravFilter === "all") return true;
		if (gravFilter === "low") return planet.gravity < 5;
		if (gravFilter === "low") return planet.gravity >= 5 && planet.gravity <= 15;
		if (gravFilter === "low") return planet.gravity > 15;
		
	});

	

	return (
    <>
		<TempCheck 
		tempFilter={tempFilter} 
		onChange={setTempFilter}/>
		<GravityCheck
		gravFilter={gravFilter} 
		onChange={setGravFilter}/>

		<div className="gallery">
      	{filteredPlanets.map((planet) => (
			<div key={planet.id} className="gallery-item">
				<PlanetCard planet={planet}/>
			</div>
		))}	
    	</div>     
    </>
  );
}