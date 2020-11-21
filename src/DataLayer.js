import React, { createContext, useContext, useReducer } from "react";

export const DataContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
	<DataContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</DataContext.Provider>
);

export const useDataLayerValue = () => useContext(DataContext);
