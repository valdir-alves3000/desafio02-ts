import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};
const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

describe("storage", () => {
  it("Deve retornar o objeto no localStorage", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");

    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalled();
  });

  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "dioBank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no LocalStorage", () => {
    changeLocalStorage({
      login: true,
    });
    expect(mockSetItem).toHaveBeenCalledWith(JSON.stringify(dioBank));
  });
});
