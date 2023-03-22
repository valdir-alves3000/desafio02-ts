import { Flex } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      justify="center"
      padding={6}
      color="white"
      bg="blue.300"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
    >
      <span>
        Copyright ©
        <a href="https://github.com/valdir-alves3000">Valdir Alves</a>{" "}
        {new Date().getFullYear()}
      </span>
    </Flex>
  );
};
