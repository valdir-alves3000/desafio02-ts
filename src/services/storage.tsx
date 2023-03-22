interface DioBankProps {
  login: boolean;
}

const dioBank = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("dioBank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (dioBank: DioBankProps): void => {
  localStorage.setItem("dioBank", JSON.stringify(dioBank));
};
