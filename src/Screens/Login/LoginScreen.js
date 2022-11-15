import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import SesionImage from "../../Images/Drawings/sesion.svg";
import Facebook from "../../Images/Social/Facebook.svg";
import Google from "../../Images/Social/Google.svg";

import Custombutton from "../../Components/Custombutton/CustomButton";
const LoginScreen = (props) => {
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
      <View style={styles.socialBox}>
        <TouchableOpacity onPress={() => Alert.alert("Presiono Facebook")}>
          <Facebook width={44} height={44} style={styles.mr} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Presiono Goole")}>
          <Google width={44} height={44} />
        </TouchableOpacity>
      </View>
      <Custombutton
        text={"Más tarde"}
        func={() => props.navigation.navigate("Home")}
      />
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
  socialBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    width: 240,
    height: 67,
    borderBottomWidth: 1,
    borderColor: "#979797",
    flexDirection: "row",
  },
  mr: {
    marginRight: 36,
  },
});
export default LoginScreen;
