import { useSelector } from 'react-redux';
import { useGetItemsQuery } from './apiSlice/apiSlice';
import { API } from '../../data/items-data';
import { TStore } from '../../types/types';
import ListItems from './ListItems/ListItems';
import SearchInput from './SearchInput/SearchInput';
import Popup from './Popup/Popup';
import styles from './Home.module.scss';

const Home = () => {
  const { id, search } = useSelector((state: TStore) => state.home);

  const path = search ? `${API.START_RTK}${search}&${API.KEY}` : `?${API.KEY}`;

  const { data, isError, isFetching } = useGetItemsQuery(path);

  const items = data && !isFetching ? data.data.results : [];

  return (
    <main className={styles.home + ' __container'}>
      <SearchInput isFetching={isFetching} />
      <Popup data={items} id={id} />
      {isFetching && (
        <div className={styles.loading}>
          Find heroes <span className={styles.oneElem}></span>
          <span className={styles.twoElem}></span>
          <span className={styles.threeElem}></span>
        </div>
      )}
      {isError && <p>Request error</p>}
      {!isFetching && items.length === 0 && (
        <p>Characters were not found, start typing the first letters of the name</p>
      )}
      <ListItems results={items} />
    </main>
  );
};

export default Home;
