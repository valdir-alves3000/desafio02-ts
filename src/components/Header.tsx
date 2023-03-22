import { Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      padding={6}
      color="white"
      bg="blue.300"
      h={24}
    >
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        DIO Bank
      </Heading>

      {isLoggedIn && (
        <Button colorScheme="blue" onClick={logout}>
          Sair
        </Button>
      )}
    </Flex>
  );
};
