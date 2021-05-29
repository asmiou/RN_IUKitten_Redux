import { SET_THEME } from "./action-types";

export const setTheme = (theme) => (dispatch) => {
  dispatch({
    type: SET_THEME,
    payload: theme,
  });
};
