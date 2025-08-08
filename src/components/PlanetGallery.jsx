import { useState } from "react";
import PlanetCard from "./PlanetCard";
import RadioButtons from "./RadioButtons";

export default function PlanetGallery({planets}) {
	const [tempFilter, setTempFilter] = useState("all");

	const filteredPlanets = planets.filter((planet) => {
		if (tempFilter === "all") return true;
		if (tempFilter === "hot") return planet.avgTemp >= 200;
		if (tempFilter === "cold") return planet.avgTemp < 200;
		return true;
	});

	return (
    <>
		<RadioButtons tempFilter={tempFilter} onChange={setTempFilter}/>

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