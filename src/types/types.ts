import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type TItem = {
  id: number;
  name: string;
  description: string;
  series: { items: Array<{ name: string }> };
  comics: { items: Array<{ name: string }> };
  thumbnail: { path: string; extension: string };
  changePopup: () => void;
};

export type TListItems = {
  data: Array<TItem>;
  popup: boolean;
  changePopup: () => void;
};

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
  file: File | string;
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

export type TApiPath = {
  BASE_URL: string;
  KEY: string;
};
