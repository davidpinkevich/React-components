import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './SearchInput.module.scss';

const SearchInput = () => {
  const [search, setSearch] = useState<string>('');
  const itemRef = useRef(search);

  useEffect(() => {
    setSearch(localStorage.getItem('search') || '');
    return () => {
      localStorage.setItem('search', itemRef.current);
    };
  }, []);

  useEffect(() => {
    itemRef.current = search;
  }, [search]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  };

  return (
    <div className={styles.searchInput}>
      <input type="text" value={search} onChange={onSearch} />
    </div>
  );
};

export default SearchInput;
