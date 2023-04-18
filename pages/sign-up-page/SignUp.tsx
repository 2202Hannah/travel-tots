import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  Button,
  Flex,
  Stack,
  Text,
  TextInput,
  Wrap,
} from "@react-native-material/core";

export const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <Flex fill={1}>
          <Stack fill={1} justify="center" spacing={12} p={12}>
            <Text>Sign up here</Text>
            <TextInput label="First name" variant="outlined" />
            <TextInput label="Last name" variant="outlined" />
            <TextInput label="Username" variant="outlined" />
            <TextInput label="Password" variant="outlined" />

            <Wrap m={4} center spacing={12}>
              <Button title="Sign up" variant="outlined" />
            </Wrap>
          </Stack>
        </Flex>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});

export default SignUp;
