import { useContext } from "react";
import { TripContext } from "../context/TripContext";

export default function TripSummary() {
	const { 
		selectedBody, setSelectedBody, 
		selectedVessel, setSelectedVessel
		} = useContext(TripContext);

	//Calculations for Travel Time
	const toEarthDistance = selectedBody?.semimajorAxis ? Math.abs(Number(selectedBody?.semimajorAxis) - 149598023) : "Unknown";

	const travelTimeHrs = toEarthDistance/(selectedVessel?.max_atmosphering_speed);
	const travelTimeDays = travelTimeHrs / 24;
	const travelTimeYrs = travelTimeDays / 365;

	if (!selectedBody || !selectedVessel) return null;

	return(
		<div className="trip-summary">
			<h2>Trip Summary</h2>
			<p>Destination:{selectedBody?.englishName ?? "" }</p>
			<p>SpaceShip:{selectedVessel?.name ?? ""}</p>
			<p>Approximate Distance Away: 
				{toEarthDistance ?? ""} km
			</p>
			<p>Estimated Travel Time: {travelTimeHrs ?? ""} hours</p>
			<p>Estimated Travel Time: {travelTimeDays ?? ""} days</p>
			<p>Estimated Travel Time: {travelTimeYrs ?? ""} years</p>

		</div>
	)
}