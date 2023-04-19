import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

export const SignUp = () => {
  const lastNameInputRef = useRef<any>();
  const usernameInputRef = useRef<any>();
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ display: "flex", flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          label="First name"
          keyboardType="default"
          returnKeyType="next"
          mode="outlined"
          onSubmitEditing={() => lastNameInputRef.current.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          ref={lastNameInputRef}
          label="Last name"
          keyboardType="default"
          returnKeyType="next"
          mode="outlined"
          onSubmitEditing={() => usernameInputRef.current.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          ref={usernameInputRef}
          label="Username"
          keyboardType="default"
          returnKeyType="next"
          mode="outlined"
          onSubmitEditing={() => emailInputRef.current.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          ref={emailInputRef}
          label="Email address"
          keyboardType="email-address"
          returnKeyType="next"
          mode="outlined"
          onSubmitEditing={() => passwordInputRef.current.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          ref={passwordInputRef}
          label="Password"
          keyboardType="default"
          returnKeyType="done"
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
