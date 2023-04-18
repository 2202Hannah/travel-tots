import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Button,
  Icon,
  IconComponentProvider,
} from "@react-native-material/core";

import LogIn from "./pages/log-in-page";
import SignUp from "./pages/sign-up-page";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
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
                      variant="text"
                      title="Back"
                      leading={(props) => (
                        <Icon name="chevron-left" {...props} />
                      )}
                      onPress={() => navigation.goBack()}
                      pressEffect="none"
                    />
                  ),
                })}
              />
            </Stack.Navigator>
          </View>
        </TouchableWithoutFeedback>
      </NavigationContainer>
    </IconComponentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
