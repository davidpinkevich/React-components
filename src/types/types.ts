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

export type TStateInput = {
  search: string;
};
