import { combineReducers } from "redux";
import LocaleReducer from "./localeReducer";
import SettingsReducer from "./settingsReducer";
import UserReducer from "./userReducer";

export default combineReducers({
  user: UserReducer,
  locale: LocaleReducer,
  settings: SettingsReducer,
});
