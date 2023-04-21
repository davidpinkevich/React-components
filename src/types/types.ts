import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type TItem = {
  id: number;
  name: string;
  description: string;
  series: { items: Array<{ name: string }> };
  comics: { items: Array<{ name: string }> };
  thumbnail: { path: string; extension: string };
};

export type TListItems = {
  results: Array<TItem>;
};

export type TPopup = {
  data: Array<TItem>;
  id: number;
};

export type TPropsInput = {
  udpateSearch: (arg0: string) => void;
};

export type TStateInput = {
  search: string;
};

export type THomeSearch = {
  isFetching: boolean;
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
  file: string;
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
  // changeName: (arg0: boolean) => void;
  // fileName: boolean;
};

export type TApiPath = {
  START_RTK: string;
  BASE_URL: string;
  KEY: string;
  START: string;
};

export type TSearchForm = {
  inputSearch: string;
};

export type TInitialStateHome = {
  popup: boolean;
  id: number;
  search: string;
};

export type TInitialStateForm = {
  items: Array<TItemForm>;
  popup: boolean;
  fileName: boolean;
};

export type TStore = {
  home: TInitialStateHome;
  form: TInitialStateForm;
};

export type TApiData = {
  data: {
    results: Array<TItem>;
  };
};
