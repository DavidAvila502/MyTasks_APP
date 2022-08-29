import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import SesionImage from "../../Images/Drawings/sesion.svg";
const LoginScreen = () => {
  //Cargar fuentes
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../../assets/Roboto-Bold.ttf"),
    "Hind-Regular": require("../../../assets/Hind-Regular.ttf"),
    "Roboto-Regular": require("../../../assets/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <SesionImage height={300} />
      <Text style={styles.titulo}>Inicia sesión</Text>
      <Text style={styles.subtitulo}>¡Soló tomará un segundo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    fontFamily: "Roboto-Regular",
    color: "#525252",
  },
  subtitulo: {
    fontFamily: "Hind-Regular",
    fontSize: 20,
    marginTop: 24,
  },
});
export default LoginScreen;
