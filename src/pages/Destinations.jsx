import React, { useEffect, useState } from "react";
import DestinationGallery from "../components/DestinationGallery";
import DestinationCard from "../components/DestinationCard";


export default function Destinations() {

  const [planets, setPlanets] = useState([])
  const [selectPlanet, setSelectPlanet] = useState(null)
  cosnt[isLoading, setIsLoading] = useState(true)

  //fetch planet info for on click display
  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest.php/bodies?filter[]=isPlanet,eq,true`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log("fetch request failed")
        }
      })
      .then(data => setPlanets(data.bodies))
      .catch(error => console.error("Error loading plants", error));
  }, []);

  //handle image select
  function handleSelect(id) {
    setIsLoading(true);
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log("fetch request failed")
        }
      })
      .then(data => {
        setSelectPlanet(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error loading planet info", error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>Which destination speaks to you?</h1>
      <DestinationGallery planets={planets} onSelect={handleSelect} />
      {loading ? <p>Loading planet info...</p>: null}
      {selectPlanet ? <DestinationCard selectplanet={selectPlanet} />: null}
    </>
  );
}
