import react from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Custombutton = ({ text, func }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={() => func()}>
      <Text style={styles.textBoton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textBoton: {
    fontFamily: "Roboto-Regular",
    fontSize: 24,
    color: "#fff",
  },

  boton: {
    bottom: 0,
    position: "absolute",
    marginBottom: 87,
    width: 176,
    height: 55,
    backgroundColor: "#FF5858",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Custombutton;
