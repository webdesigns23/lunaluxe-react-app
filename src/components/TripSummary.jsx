import { useContext } from "react";
import { TripContext } from "../context/TripContext";

export default function TripSummary() {
	const { 
		selectedBody, setSelectedBody, 
		selectedVessel, setSelectedVessel
		} = useContext(TripContext)

	const toEarth = selectedBody?.semimajorAxis ? Math.abs(Number(selectedBody?.semimajorAxis) - 149598023) : "Unknown"


	return(
		<div>
			<h2>Trip Summary</h2>
			<p>Destination:{`${selectedBody?.englishName}`}</p>
			<p>SpaceShip:{`${selectedVessel?.name}`}</p>
			<p>Approximate Distance Away: 
				{`${toEarth}`} km
			</p>
			<p>Estimated Travel Time: hours</p>

		</div>
	)
}