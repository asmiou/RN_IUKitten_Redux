import React from "react";
import { StyleSheet } from "react-native";
import { Toggle } from "@ui-kitten/components";
import { connect } from "react-redux";
import { setTheme } from "./../redux/actions/settingsAction";

const ToggleTheme = (props) => {
  const isDarkMode = props.settings.darkTheme;

  const onActiveCheckedChange = (isChecked) => {
    props.dispatch(setTheme(!isDarkMode));
  };

  return (
    <Toggle
      style={styles.toggle}
      status="primary"
      checked={isDarkMode}
      onChange={onActiveCheckedChange}
    >
      Theme: {isDarkMode ? "Dark" : "Light"}
    </Toggle>
  );
};

const mapStateToProps = (store) => {
  return {
    settings: store.settings,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(ToggleTheme);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  toggle: {
    margin: 2,
  },
});
