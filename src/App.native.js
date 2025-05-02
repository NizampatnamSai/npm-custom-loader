// src/App.native.js

import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Loader = ({ size = 40, color = "dodgerblue", loading = true }) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
