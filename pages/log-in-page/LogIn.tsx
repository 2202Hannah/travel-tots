import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export const LogIn = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", gap: 12, padding: 12 }}
        >
          <TextInput label="Username" variant="outlined" />
          <TextInput label="Password" variant="outlined" />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: 4,
              gap: 12,
            }}
          >
            <Button mode="contained">Log in</Button>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate("Sign up")}
            >
              Sign up
            </Button>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});

export default LogIn;
