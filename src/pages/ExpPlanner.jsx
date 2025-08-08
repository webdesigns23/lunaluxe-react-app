import ChooseBody from "../components/ChooseBody";
import ChooseVessel from "../components/ChooseVessel";

export default function ExpPlanner() {

  return (
    <>
      <h1>Expedition planner</h1>
      <p>Journey in to the unknown! Plan your next great adventure!</p>
      <ChooseBody />
      <ChooseVessel />       
    </>
  );
}

