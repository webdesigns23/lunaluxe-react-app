import { useState } from "react";
import ShipCard from "./ShipCard";


export default function ShipGallery({ships}) {


	return (
	<>
		<div className="gallery">
		{ships.map((ship) => (
			<div key={ship.id} className="gallery-item">
				<ShipCard ship={ship}/>
			</div>
		))}	
		</div>   
	</>
  );
}