import React from "react";

export default function RadioButtons({tempFilter, onChange}) {

	return (
	<>
		<label>
			<input
				type="radio"
				name="filter-temp"
				value="all"
				checked={tempFilter === "all"} 
				onChange={(e) => onChange(e.target.value)} /> All
		</label>
		<label>
			<input
				type="radio"
				name="filter-temp"
				value="hot"
				checked={tempFilter === "hot"} 
				onChange={(e) => onChange(e.target.value)} /> Hot
		</label>
		<label>
			<input
				type="radio"
				name="filter-temp"
				value="cold"
				checked={tempFilter === "cold"}
				onChange={(e) => onChange(e.target.value)} /> Cold
		</label>
	</>
  );
}