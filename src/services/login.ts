import { api } from "../api";
import { UserData } from "../pages/Conta";

export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  const data = (await api) as UserData;

  if (email !== data.email || password !== data.password) {
    return false;
  }

  return true;
};
