export interface Ibook {
  title: string;
  author: string;
  genre: string;
  year: number;
  image?: string;
}

export interface ITest {
  data: Array<Ibook>;
}

export type TPropsInput = {
  udpateSearch: (arg0: string) => void;
};

export type TPropsForm = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, arg0: TItemForm) => void;
  changeName: (value: boolean) => void;
  fileName: boolean;
  valid: TValidateObject;
};

export type TStateInput = {
  search: string;
};

export type TStateForm = {
  value: string;
  class: boolean;
};

export type TItemForm = {
  name: string;
  date: string;
  select: string;
  radio: Array<boolean | undefined>;
  checkbox: Array<boolean | undefined>;
  file: string | File;
  fileName: string;
};

type TValidateObject = {
  checkName: boolean;
  checkDate: boolean;
  checkRadio: boolean;
  checkCheckbox: boolean;
  checkFileName: boolean;
};
export type TPageForms = {
  value: Array<TItemForm>;
  valid: TValidateObject;
  fileName: boolean;
  popup: boolean;
};

export type TInputsRadio = {
  values: Array<React.RefObject<HTMLInputElement>>;
  valid: boolean;
};

export type TInputsSelect = {
  values: React.RefObject<HTMLSelectElement>;
};

export type TInputsCheckbox = {
  values: Array<React.RefObject<HTMLInputElement>>;
  valid: boolean;
};

export type TInputsFile = {
  values: React.RefObject<HTMLInputElement>;
  changeNames: (value: boolean) => void;
  fileName: boolean;
  valid: boolean;
};
