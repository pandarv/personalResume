import React, { useState, useContext, useReducer } from 'react';
import reducer from '../reducer/reducer';
const AppContext = React.createContext();

const initialState = {
	isMenuOpen: false,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openMenu = () => {
		dispatch({ type: 'OPEN_MENU' });
	};

	return <AppContext.Provider value={{ ...state, openMenu }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
