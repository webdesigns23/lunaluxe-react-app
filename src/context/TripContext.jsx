import React, { createContext, useState } from "react";

//1. creat context-TripContext
export const TripContext = createContext();

export function TripProvider({children}){
  //2. define global state
  const [selectedBody, setSelectedBody] = useState(null);
  const [selectedVessel, setSelectedVessel] = useState(null);

  return(
    //3. provide trip state to all components
    <TripContext.Provider value={{
      selectedBody, setSelectedBody,
      selectedVessel, setSelectedVessel}}>
      {children}
    </TripContext.Provider>
  );
}

