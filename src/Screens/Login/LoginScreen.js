import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
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
// importaciones autenticacion
import * as googl from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
// Componentes personalizados
import Custombutton from "../../Components/Custombutton/CustomButton";
// Servicio de autetinticacion navegador
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  //Cargamos objeto de navegacion
  const navigation = useNavigation();

  // Hook de respuesta de autenticacion
  const [request, response, promptAsync] = googl.useAuthRequest({
    expoClientId:
      "990003487465-uf0c2i1v82vko2e3sp7ks0vjfa1j9s05.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
      navigation.navigate("Home");
    }
  }, [response]);

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
        <TouchableOpacity onPress={() => promptAsync()}>
          <Google width={44} height={44} />
        </TouchableOpacity>
      </View>
      <Custombutton
        text={"Más tarde"}
        func={() => navigation.navigate("Home")}
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
