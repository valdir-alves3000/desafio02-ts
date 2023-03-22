import { Center, Heading, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonApp } from "../components/ButtonApp";
import { Card } from "../components/Card";
import { AppContext } from "../context/AppContext";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

export const Home = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateUser = async () => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("Email/Senha Inválido!");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/conta/236540");
  };

  return (
    <Card>
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
        <ButtonApp text="Login" handleLogin={validateUser} />
      </Center>
    </Card>
  );
};
