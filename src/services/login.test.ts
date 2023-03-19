import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    login("valdir@alves.com", "1234");
    expect(mockAlert).toHaveBeenCalledWith(
      "VALDIR, Seja bem vindo ao DIO Bank!"
    );
  });

  it("Deve exibir um alert de erro", () => {
    login("valdir@alves.com", "0236");
    expect(mockAlert).toHaveBeenCalledWith("Usuário/Senha inválido!");
  });
});
