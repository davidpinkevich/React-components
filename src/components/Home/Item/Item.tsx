import { Component } from 'react';
import { Ibook } from '../../../types/types';
import styles from './Item.module.scss';

class Item extends Component<Ibook> {
  constructor(props: Ibook) {
    super(props);
  }
  render() {
    const { title, author, genre, year, image } = this.props;
    return (
      <li className={styles.item}>
        <div className={styles.bookImgWrapper}>
          <img src={image} />
        </div>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>Genre: {genre}</p>
        <p>Year: {year}</p>
      </li>
    );
  }
}

export default Item;
