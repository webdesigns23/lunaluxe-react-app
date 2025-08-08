import React from "react";

export default function SpeedCheck({speedFilter, onChange}) {

	return (
	<>
	<h3> Filter by Speed: </h3>
		<label>
			<input
				type="radio"
				name="filter-speed"
				value="all"
				checked={speedFilter === "all"} 
				onChange={(e) => onChange(e.target.value)} /> All
		</label>
		<label>
			<input
				type="radio"
				name="filter-speed"
				value="fast"
				checked={speedFilter === "fast"} 
				onChange={(e) => onChange(e.target.value)} /> Fast
		</label>
		<label>
			<input
				type="radio"
				name="filter-speed"
				value="slow"
				checked={speedFilter === "slow"}
				onChange={(e) => onChange(e.target.value)} /> Slow
		</label>
	</>
  );
}