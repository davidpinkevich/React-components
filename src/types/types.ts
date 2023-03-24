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
};

export type TStateInput = {
  search: string;
};

export type TStateForm = {
  value: string;
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

export type TPageForms = {
  value: Array<TItemForm>;
};

export type TInputsRadio = {
  values: Array<React.RefObject<HTMLInputElement>>;
};

export type TInputsSelect = {
  values: React.RefObject<HTMLSelectElement>;
};

export type TInputsCheckbox = {
  values: Array<React.RefObject<HTMLInputElement>>;
};

export type TInputsFile = {
  values: React.RefObject<HTMLInputElement>;
};
