import { useState, useEffect } from 'react';
import { API } from '../../data/items-data';
import { TItem } from '../../types/types';
import ListItems from './ListItems/ListItems';
import SearchInput from './SearchInput/SearchInput';
import Popup from './Popup/Popup';
import styles from './Home.module.scss';

const Home = () => {
  const [data, setData] = useState<Array<TItem>>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [activeForm, setActiveForm] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [popup, setPopup] = useState<boolean>(false);
  const [notFound, setNotFound] = useState(false);
  const [id, setID] = useState(0);

  const changePopup = (popupValue: boolean) => setPopup(popupValue);
  const changeActive = (value: boolean) => setActiveForm(value);
  const getId = (id: number) => setID(id);

  const changeSearch = (search: string) => {
    setData([]);
    setSearch(search);
    setLoading((data) => !data);
    localStorage.setItem('search', search);
  };
  if (!localStorage.getItem('search')) localStorage.setItem('search', search);

  useEffect(() => {
    (async () => {
      try {
        setNotFound(false);
        const ls = localStorage.getItem('search');
        const path = ls ? `${API.START}${ls}&${API.KEY}` : `${API.BASE_URL}?${API.KEY}`;
        const response = await fetch(path);
        const items = await response.json();
        setData(items.data.results);
        if (!items.data.results.length) setNotFound(true);
      } catch (err) {
        if (err instanceof Error && err.name === 'TypeError') setError('Sorry, wrong data entered');
      } finally {
        setLoading(false);
        setActiveForm(false);
      }
    })();
  }, [search, activeForm]);

  return (
    <main className={styles.home + ' __container'}>
      <SearchInput active={activeForm} changeActive={changeActive} changeSearch={changeSearch} />
      <Popup data={data} id={id} changePopup={changePopup} popup={popup} />
      {loading && (
        <div className={styles.loading}>
          Find heroes <span className={styles.oneElem}></span>
          <span className={styles.twoElem}></span>
          <span className={styles.threeElem}></span>
        </div>
      )}
      {error && <p>{error}</p>}
      {notFound && <p>Characters were not found, start typing the first letters of the name</p>}
      <ListItems data={data} getId={getId} changePopup={changePopup} />
    </main>
  );
};

export default Home;
