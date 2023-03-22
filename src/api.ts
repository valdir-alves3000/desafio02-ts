const conta = {
  id: "236540",
  name: "Valdir Alves",
  email: "valdir@dio.bank",
  password: "123456",
  balance: 2000.0,
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
