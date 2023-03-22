import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { CardInfo } from "../components/CardInfo";
import { AppContext } from "../context/AppContext";

export interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  balance: number;
}

export const Conta = () => {
  const { isLoggedIn } = useContext(AppContext);
  const [userData, setUserData] = useState<UserData | null>(null);
  const actualDate = new Date();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  !isLoggedIn && navigate("/");

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} pt={16}>
        {!userData && (
          <Center>
            <Spinner size="xl" color="#fff" />
          </Center>
        )}
        {userData && (
          <>
            <CardInfo
              text={`${actualDate.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}`}
              title={`Bem vindo(a), ${userData.name}`}
            />

            <CardInfo title="Saldo" text={`R$ ${userData.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
