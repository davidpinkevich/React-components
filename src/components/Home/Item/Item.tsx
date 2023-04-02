import { Ibook } from '../../../types/types';
import styles from './Item.module.scss';

const Item = (props: Ibook) => {
  const { title, author, genre, year, image } = props;

  return (
    <li className={styles.item}>
      <div className={styles.bookImgWrapper}>
        <img src={image} />
      </div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Year: {year}</p>
    </li>
  );
};

export default Item;
