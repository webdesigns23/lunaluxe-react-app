import React from "react";

export default function RadioButtons({gravFilter, onChange}) {

	return (
	<>
	<h3> Filter by Gravity: </h3>
		<label>
			<input
				type="radio"
				name="filter-grav"
				value="all"
				checked={gravFilter === "all"} 
				onChange={(e) => onChange(e.target.value)} /> All
		</label>
		<label>
			<input
				type="radio"
				name="filter-grav"
				value="low"
				checked={gravFilter === "low"} 
				onChange={(e) => onChange(e.target.value)} /> Low
		</label>
		<label>
			<input
				type="radio"
				name="filter-grav"
				value="medium"
				checked={gravFilter === "medium"}
				onChange={(e) => onChange(e.target.value)} /> Earth-Like
		</label>
		<label>
			<input
				type="radio"
				name="filter-grav"
				value="high"
				checked={gravFilter === "high"}
				onChange={(e) => onChange(e.target.value)} /> High
		</label>

	</>
  );
}