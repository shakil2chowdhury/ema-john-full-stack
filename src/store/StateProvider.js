import React, { createContext, useContext, useReducer } from "react";

//creating the data
export const StateContext = createContext();

//wrap and provide data to context
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//get information from the layer
export const useStateValue = () => useContext(StateContext)