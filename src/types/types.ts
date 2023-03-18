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
