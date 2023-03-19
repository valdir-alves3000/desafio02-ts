export const login = (email: string, password: string): void => {
  const parseEmail = email.split("@");
  const name = parseEmail[0].toUpperCase();

  if (password !== "1234") return alert("Usuário/Senha inválido!");

  alert(`${name}, Seja bem vindo ao DIO Bank!`);
};
