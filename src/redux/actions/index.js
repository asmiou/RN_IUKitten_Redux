import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOCAL_INFO,
  SET_USER_DETAILS,
  SET_THEME
} from "./action-types";

export const setUserDetails = () => dispatch => {
  dispatch({ 
      type: SET_USER_DETAILS, 
      payload: {username:"asmiou", fullname:"Asmiou Diallo"} 
    });
};

export const setLocal = () => dispatch => {
    dispatch({ 
        type: SET_LOCAL_INFO, 
        payload: {lang:"fr_FR", country:"Guinea", agency:"Agence de cimenterie", currency:"GNF"} 
    });
};


