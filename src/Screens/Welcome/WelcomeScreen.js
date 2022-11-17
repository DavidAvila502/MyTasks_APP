import React from "react";
import Welcome from "../../Images/Drawings/welcome.svg";
import Custombutton from "../../Components/Custombutton/CustomButton";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
const WelcomeScreen = () => {
  //Cargamos objeto de navegacion
  const navigation = useNavigation();
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
      <Welcome width={333} height={251} style={styles.imagen} />
      <Text style={styles.titulo}>My Tasks!</Text>
      <Text style={styles.frase}>
        ¡Organiza tus tareas y ahorra más tiempo!
      </Text>
      <Custombutton
        text={"Iniciar"}
        func={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imagen: {
    marginTop: 32,
  },
  titulo: {
    fontSize: 36,
    marginTop: 26,
    color: "#525252",
    fontFamily: "Roboto-Bold",
  },
  frase: {
    marginTop: 33,
    fontFamily: "Hind-Regular",
    fontSize: 20,
    width: 262,
    textAlign: "center",
  },
});

export default WelcomeScreen;
