import React from "react";
import AppNavigator  from "./src/navigation";

import { Provider } from "react-redux";
import store from './src/redux/store';

export default () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
