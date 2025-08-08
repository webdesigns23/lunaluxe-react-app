import { useState } from "react";
import ShipCard from "./ShipCard";
import SpeedCheck from "./SpeedCheck";


export default function ShipGallery({ships}) {
	const [speedFilter, setSpeedFilter] = useState("all");

	const filteredShips = ships.filter((ship) => {
		const speed = parseInt(ship.max_atmosphering_speed);

		if (speedFilter === "all") return true;
		if (speedFilter === "fast") return speed >= 1000;
		if (speedFilter === "slow") return speed < 1000;
		return true;
	});


	return (
	<>
		<SpeedCheck speedFilter={speedFilter} onChange={setSpeedFilter}/>

		{filteredShips.length === 0 ? (
        <p>No ships match the selected speed filter.</p>
      	) : (

		<div className="gallery">
		{filteredShips.map((ship) => (
			<div key={ship.name } className="gallery-item">
				<ShipCard ship={ship}/>
			</div>
		))}	
		</div>  
		)}
	</>
  );
}