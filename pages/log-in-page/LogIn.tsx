import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import {
  Button,
  Flex,
  Stack,
  TextInput,
  Wrap,
} from "@react-native-material/core";

export const LogIn = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Flex fill={1}>
        <Stack fill={1} justify="center" spacing={12} p={12}>
          <TextInput label="Username" variant="outlined" />
          <TextInput label="Password" variant="outlined" />

          <Wrap m={4} center spacing={12}>
            <Button title="Log in" />
            <Button
              title="Sign up"
              variant="outlined"
              onPress={() => navigation.navigate("Sign up")}
            />
          </Wrap>
        </Stack>
      </Flex>
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
