import { TItem } from '../../../types/types';
import styles from './Item.module.scss';

const Item = (props: TItem) => {
  return (
    <li
      className={styles.item}
      onClick={() => {
        props.changePopup(true);
        props.getId(props.id);
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
