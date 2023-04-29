import { useDispatch } from 'react-redux';
import { TItem } from '../../../types/types';
import { activePopup, getId } from '../homeSlice';
import styles from './Item.module.scss';

const Item = (props: TItem) => {
  const dispatch = useDispatch();
  return (
    <li
      className={styles.item}
      onClick={() => {
        dispatch(activePopup(true));
        dispatch(getId(props.id));
      }}
      data-testid="li-item"
    >
      <h2>{props.name}</h2>
      <div className={styles.bookImgWrapper}>
        <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} />
      </div>
    </li>
  );
};

export default Item;
