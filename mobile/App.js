import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { CuisinesCarousel } from "./src/components/CuisinesCarousel";
import { Header } from "./src/components/Header";
import useFontsLoader from "./src/hooks/useFontLoader";
import { ChipScrollView } from "./src/components/ChipScrollView";
import { Footer } from "./src/components/Footer";

export default function App() {
  const fontsLoaded = useFontsLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Header />
          <ChipScrollView />
          <CuisinesCarousel />
          <Footer />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(248,248,248)",
    paddingHorizontal: 20,
    paddingVertical: 18,
    paddingTop: 100,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 9,
    shadowColor: "#B0B0B0",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 7,
  },
});
