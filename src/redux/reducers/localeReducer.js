import {
    SET_LOCAL_INFO
  } from "../actions/action-types";
  
  const initialState = {
    lang:"fr_FR", 
    country:"Guinea", 
    agency:"Agence de cimenterie", 
    currency:"EUR"
  };
  
  export default function UserReducer(state = initialState, action) {
    switch (action.type) {
      case SET_LOCAL_INFO:
        return {
          ...state,
          ...action.payload,
        };
  
  
      default:
        return state;
    }
  }
  