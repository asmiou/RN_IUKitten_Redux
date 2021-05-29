import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SET_USER_DETAILS,
} from "../actions/action-types";

const initialState = {
  token: undefined,
  details: {username:"asmiou", fullname:"Asmiou Diallo"} ,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        token: undefined,
      };

    case SET_USER_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
}
