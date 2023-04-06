import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { THomeSearch, TSearchForm } from '../../../types/types';
import './SearchInput.scss';

const SearchInput = (props: THomeSearch) => {
  const { register, handleSubmit } = useForm<TSearchForm>({
    mode: 'onSubmit',
    defaultValues: { inputSearch: localStorage.getItem('search') || '' },
  });

  const onSubmit: SubmitHandler<TSearchForm> = (data) => {
    props.changeSearch(data.inputSearch);
    props.changeActive(true);
  };
  return (
    <div className="searchInput">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inputSearch"
          placeholder="Start typing a name..."
          type="text"
          {...register('inputSearch')}
        />
        <input
          className="btnSearch"
          disabled={props.active ? true : false}
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default SearchInput;
