import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface ButtonProps {
  handleLogin: MouseEventHandler;
  text: string;
}

export const ButtonApp = ({ handleLogin, text }: ButtonProps) => {
  return (
    <Button
      isLoading={false}
      onClick={handleLogin}
      color="white"
      bg="blue.300"
      size="lg"
      h="10"
      w="full"
      mt="7"
      _hover={{ bg: "blue.400" }}
    >
      {text}
    </Button>
  );
};
