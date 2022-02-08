import React, { createContext, useContext, useReducer } from "react";

//Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to all the componenets in the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </StateContext.Provider>
);

// Pool information from the data layer
export const useStateValue = () => useContext(StateContext);