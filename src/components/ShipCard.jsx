import React from "react";

export default function ShipCard({ship}) {

	return (
	<div className="details">
	  <h3>{ship.name}</h3>
	  <p>Speed:{ship.max_atmosphering_speed} km/hr </p>

	</div>
  );
}