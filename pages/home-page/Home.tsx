import React from "react";
import {
  Button,
  Flex,
  Stack,
  TextInput,
  Wrap,
} from "@react-native-material/core";

export const Home = () => {
  return (
    <Flex fill={1}>
      <Stack fill={1} justify="center" spacing={12} p={12}>
        <TextInput label="Username" variant="outlined" />
        <TextInput label="Password" variant="outlined" />

        <Wrap m={4} center spacing={12}>
          <Button title="Log in" />
          <Button title="Sign up" variant="outlined" />
        </Wrap>
      </Stack>
    </Flex>
  );
};

export default Home;
