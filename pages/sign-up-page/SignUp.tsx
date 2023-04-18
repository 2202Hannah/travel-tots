import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", gap: 12, padding: 12 }}
          >
            <Text>Sign up here</Text>
            <TextInput label="First name" variant="outlined" />
            <TextInput label="Last name" variant="outlined" />
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
              <Button title="Sign up" variant="outlined" />
            </View>
          </View>
        </View>
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
