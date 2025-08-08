import { useState } from "react";
import PlanetCard from "./PlanetCard";
import TempCheck from "./TempCheck";
import GravityCheck from "./GravityCheck";

export default function PlanetGallery({planets}) {
	const [tempFilter, setTempFilter] = useState("all");
	const [gravFilter, setGravFilter] = useState("all");

	
	const filteredPlanets = planets.filter((planet) => {
		//Temperature Filter
		const tempParameters = tempFilter === "all" || 
		(tempFilter === "hot" && planet.avgTemp >= 200) || 
		(tempFilter === "cold" && planet.avgTemp < 200);
	

		//Gravity Filter
		const gravParameters = gravFilter === "all" || 
		(gravFilter === "low" && planet.gravity < 5) || 
		(gravFilter === "medium" && planet.gravity >= 5 && planet.gravity <= 15) || (gravFilter === "high" && planet.gravity > 15);
		
		return tempParameters && gravParameters;
	});

	return (
    <>
		<TempCheck tempFilter={tempFilter} onChange={setTempFilter}/>
		<GravityCheck gravFilter={gravFilter} onChange={setGravFilter}/>

		{filteredPlanets.length === 0 ?(
			<p> No Planets fit that criteria.</p>
		) : (

		<div className="gallery">
      	{filteredPlanets.map((planet) => (
			<div key={planet.id} className="gallery-item">
				<PlanetCard planet={planet}/>
			</div>
		))}	
    	</div>   
		)}  
    </>
  );
}