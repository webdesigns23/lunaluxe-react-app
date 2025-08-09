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
	if (selectedBody.englishName === "Earth") 
		return <img src="src/assets/earth_tour.PNG" 
        style={{ width: "400px" }} 
        alt="earth tourism poster"/>

	return(
		<div className="trip-summary">
			<h2>Trip Summary</h2>
			<h4>Destination:</h4>
			<p>{selectedBody?.englishName ?? "" }</p>
			<h4>Spaceship:</h4>
			<p>{selectedVessel?.name ?? ""}</p>
			<h4>Approximate Distance from Earth:</h4>
			<p>{toEarthDistance ?? ""} km </p>
			<h4>Estimated Travel Time:</h4>
			<p> {travelTimeHrs ?? ""} hours</p>
			<p>IN DAYS!: {travelTimeDays ?? ""} days</p>
			<p>IN YEARS!!!: {travelTimeYrs ?? ""} years</p>

		</div>
	)
}