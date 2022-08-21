import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const LoginScreen = () => {
  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default LoginScreen;
