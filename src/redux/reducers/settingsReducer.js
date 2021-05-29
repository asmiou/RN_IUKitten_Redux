import {SET_THEME} from "../actions/action-types";
  
  const initialState = {
    darkTheme:undefined
  };
  
  export default function SettingsReducer(state = initialState, action) {

    switch (action.type) {
      case SET_THEME:
        return {
          ...state,
          darkTheme: action.payload,
        };
  
      default:
        return state;
    }
  }
  