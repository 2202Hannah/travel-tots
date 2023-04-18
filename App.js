import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Button,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "./pages/log-in-page";
import SignUp from "./pages/sign-up-page";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Log in" component={LogIn} />
              <Stack.Screen
                name="Sign up"
                component={SignUp}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <Button
                      icon="chevron-left"
                      mode="text"
                      onPress={() => navigation.goBack()}
                    >
                      Back
                    </Button>
                  ),
                })}
              />
            </Stack.Navigator>
          </View>
        </TouchableWithoutFeedback>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
