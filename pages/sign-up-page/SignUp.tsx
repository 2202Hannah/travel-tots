import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

export const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ display: "flex", flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput label="First name" keyboardType="default" mode="outlined" />
        <TextInput label="Last name" keyboardType="default" mode="outlined" />
        <TextInput label="Username" keyboardType="default" mode="outlined" />
        <TextInput
          label="Email address"
          keyboardType="email-address"
          mode="outlined"
        />
        <TextInput
          label="Password"
          keyboardType="default"
          secureTextEntry
          mode="outlined"
        />

        <Button mode="contained">Sign up</Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    gap: 12,
    padding: 12,
  },
});

export default SignUp;
