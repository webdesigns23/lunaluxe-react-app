import React from "react";

export default function RadioButtons() {

	return (
	<>
		<label>
			<input
				type="radio"
				name="filter-temp"
				value="all"
				checked={selected === "all"} 
				onChange={(e) => onchange(e.target.value)} /> All
		</label>
		<label>
			<input
				type="radio"
				name="filter-temp"
				value="hot"
				checked={selected === "hot"} 
				onChange={(e) => onchange(e.target.value)} /> Hot
		</label>
		<label>
			<input
				type="radio"
				name="filter-temp"
				value="cold"
				checked={selected === "cold"}
				onChange={(e) => onchange(e.target.value)} /> Cold
		</label>
	</>
  );
}