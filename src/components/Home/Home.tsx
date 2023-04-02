import ListItems from './ListItems/ListItems';
import SearchInput from './SearchInput/SearchInput';

const Home = () => {
  const styleHome = '__container';

  return (
    <main className={styleHome}>
      <SearchInput />
      <ListItems />
    </main>
  );
};

export default Home;
