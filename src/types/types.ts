import { FieldErrors, UseFormRegister } from 'react-hook-form';

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
  changeSub: (arg0: TItemForm) => void;
  changeName: (arg0: boolean) => void;
  changePopup: (arg0: boolean) => void;
  fileName: boolean;
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
  radio: string;
  checkbox: Array<string>;
  fileList?: FileList;
  file?: File;
};

export type TPageForms = {
  value: Array<TItemForm>;
};

export type TInputsRadio = {
  register: UseFormRegister<TItemForm>;
  errors: FieldErrors<TItemForm>;
};

export type TInputsSelect = {
  register: UseFormRegister<TItemForm>;
};

export type TInputsCheckbox = {
  register: UseFormRegister<TItemForm>;
  errors: FieldErrors<TItemForm>;
};

export type TInputsFile = {
  register: UseFormRegister<TItemForm>;
  errors: FieldErrors<TItemForm>;
  changeName: (arg0: boolean) => void;
  fileName: boolean;
};
