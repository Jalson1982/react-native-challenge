import { useFonts } from "expo-font";

const useFontsLoader = () => {
  const [fontsLoaded] = useFonts({
    "ProximaNova-Bold": require("../../assets/fonts/ProximaNovaAlt-Bold.ttf"),
    "ProximaNova-Semibold": require("../../assets/fonts/ProximaNovaAlt-Semibold.ttf"),
    "ProximaNova-Regular": require("../../assets/fonts/ProximaNovaAlt-Regular.ttf"),
    "ProximaNovaCond-Semibold": require("../../assets/fonts/ProximaNovaAltCond-Semibold.ttf"),
  });

  return fontsLoaded;
};

export default useFontsLoader;
