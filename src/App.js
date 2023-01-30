import { ActivityIndicator, StatusBar, View } from "react-native";
import { Game, StartGame } from "./screens";

import { GameProvider } from "./context";
import { Header } from "./components";
import { colors } from "./constants/colors";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    "Playfair-Display-regular": require("../assets/fonts/static/PlayfairDisplay-Regular.ttf"),
    "Playfair-Display-semibold": require("../assets/fonts/static/PlayfairDisplay-SemiBold.ttf"),
    "Playfair-Display-bold": require("../assets/fonts/static/PlayfairDisplay-Bold.ttf"),
  });
  const [user, setUser] = useState({
    username: "",
    image: null,
  });

  const onHandleSetUser = (name, photo) => {
    setUser({
      username: name,
      image: photo,
    });
  };

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={colors.primary} />
      </View>
    );
  }
  return (
    <View>
      <GameProvider>
        <StatusBar />
        <Header />
        {user?.username === "" ? (
          <StartGame onHandleSetUser={onHandleSetUser} />
        ) : (
          <Game user={user} />
        )}
      </GameProvider>
    </View>
  );
}
