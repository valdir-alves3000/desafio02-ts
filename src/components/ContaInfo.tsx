import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ContaInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informações da Conta
      </Text>
      <Link to="/conta/236540">
        <Text fontSize="xl">Conta</Text>
      </Link>
    </>
  );
};
