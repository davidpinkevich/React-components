import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { searchFind } from '../homeSlice';
import { THomeSearch, TSearchForm, TStore } from '../../../types/types';
import './SearchInput.scss';

const SearchInput = ({ isFetching }: THomeSearch) => {
  const { search } = useSelector((state: TStore) => state.home);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<TSearchForm>({
    mode: 'onSubmit',
    defaultValues: { inputSearch: search },
  });

  const onSubmit: SubmitHandler<TSearchForm> = (data) => {
    dispatch(searchFind(data.inputSearch));
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
          disabled={isFetching ? true : false}
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default SearchInput;
