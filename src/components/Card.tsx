import { Box, Center, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../services/login";
import { ButtonApp } from "./ButtonApp";

export const Card = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box minHeight="80vh" bgColor="blue.200" padding="12">
      <Center>
        <Box
          bgColor="#FFFFFF"
          borderRadius="5"
          p="4"
          width="50vw"
          maxWidth="500px"
        >
          <Center>
            <Heading size="lg" color="gray.500" mb="5">
              Faça o login
            </Heading>
          </Center>

          <Text as="i" color="blue.200">
            Email
          </Text>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            mb="5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Text as="i" color="blue.200">
            Password
          </Text>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Center>
            <ButtonApp
              text="Login"
              handleLogin={() => login(email, password)}
            />
          </Center>
        </Box>
      </Center>
    </Box>
  );
};
