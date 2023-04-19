import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export const LogIn = ({ navigation }) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);

  // TODO fix any type
  const passwordInputRef = useRef<any>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", gap: 12, padding: 12 }}
        >
          <TextInput
            label="Username or email address"
            keyboardType="default"
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
            secureTextEntry={isSecureTextEntry}
            mode="outlined"
            right={
              <TextInput.Icon
                icon={isSecureTextEntry ? "eye" : "eye-off"}
                onPress={() => {
                  setIsSecureTextEntry(!isSecureTextEntry);
                }}
              />
            }
          />

          <Button mode="contained">Log in</Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("Sign up")}
          >
            Sign up
          </Button>
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
