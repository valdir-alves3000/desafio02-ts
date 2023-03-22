import { login } from "./login";

// const mockSetIsLoggedIn = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: () => ({
//     setIsLoggedIn: mockSetIsLoggedIn,
//   }),
// }));

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockNavigate,
// }));

describe("login", () => {
  const mockEmail = "valdir@dio.bank";
  const mockPassword = "123456";

  it("Deve exibir um alert com boas vindas", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it("Naõ deve exibir a mensagem de boas vindas sem o email", async () => {
    const response = await login("", mockPassword);
    expect(response).toBeFalsy();
  });
});
