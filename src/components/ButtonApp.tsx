import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface ButtonProps {
  handleLogin: () => void;
  text: string;
}

export const ButtonApp = ({ handleLogin, text }: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleLogin();
    }, 800);
  };
  return (
    <Button
      isLoading={isLoading}
      onClick={handleClick}
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
