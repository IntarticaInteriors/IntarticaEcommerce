// UserContext.js
"use client"
import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  user: {},
};

// Create context
export const UserContext = createContext({});

// Define reducer function
const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: {...action.payload},
      };
    // Additional cases for updating user data can be added here
    default:
      return state;
  }
};

// UserContext provider
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext=()=>{
    return useContext(UserContext);
}