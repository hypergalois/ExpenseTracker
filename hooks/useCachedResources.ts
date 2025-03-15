import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useCallback } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Mantiene el SplashScreen visible mientras carga
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Kanit-Black": require("../assets/fonts/Kanit-Black.ttf"),
          "Kanit-BlackItalic": require("../assets/fonts/Kanit-BlackItalic.ttf"),
          "Kanit-Bold": require("../assets/fonts/Kanit-Bold.ttf"),
          "Kanit-BoldItalic": require("../assets/fonts/Kanit-BoldItalic.ttf"),
          "Kanit-ExtraBold": require("../assets/fonts/Kanit-ExtraBold.ttf"),
          "Kanit-ExtraBoldItalic": require("../assets/fonts/Kanit-ExtraBoldItalic.ttf"),
          "Kanit-ExtraLight": require("../assets/fonts/Kanit-ExtraLight.ttf"),
          "Kanit-ExtraLightItalic": require("../assets/fonts/Kanit-ExtraLightItalic.ttf"),
          "Kanit-Italic": require("../assets/fonts/Kanit-Italic.ttf"),
          "Kanit-Light": require("../assets/fonts/Kanit-Light.ttf"),
          "Kanit-LightItalic": require("../assets/fonts/Kanit-LightItalic.ttf"),
          "Kanit-Medium": require("../assets/fonts/Kanit-Medium.ttf"),
          "Kanit-MediumItalic": require("../assets/fonts/Kanit-MediumItalic.ttf"),
          "Kanit-Regular": require("../assets/fonts/Kanit-Regular.ttf"),
          "Kanit-SemiBold": require("../assets/fonts/Kanit-SemiBold.ttf"),
          "Kanit-SemiBoldItalic": require("../assets/fonts/Kanit-SemiBoldItalic.ttf"),
          "Kanit-Thin": require("../assets/fonts/Kanit-Thin.ttf"),
          "Kanit-ThinItalic": require("../assets/fonts/Kanit-ThinItalic.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // Oculta el SplashScreen de forma controlada
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
