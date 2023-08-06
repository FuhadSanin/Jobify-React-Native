import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useCallback } from "react" //same as useEffect but it only runs when the dependencies change

//To load Font
SplashScreen.preventAutoHideAsync() // Prevent native splash screen from autohiding
// what is splash screen
// A splash screen is a screen that appears when you first load your app, while the application is initializing. It is usually displayed while the app is still downloading necessary resources like assets and data. A splash screen is a launch screen that is primarily used on mobile devices.
const Layout = () => {
  const [FontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (FontsLoaded) {
      await SplashScreen.hideAsync() // Hide SplashScreen after 3secs
    }
  }, [FontsLoaded])

  if (!FontsLoaded) {
    return null
  }
  return <Stack /> //Stack is a component that allows you to navigate between screens
}

export default Layout
