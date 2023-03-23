import { Component } from 'react';
import dataItems from '../../../data/items-data';
import Item from '../Item/Item';
import styles from './ListItems.module.scss';

class ListItems extends Component {
  render() {
    return (
      <ul className={styles.listItems}>
        {dataItems.map((elem) => {
          return <Item {...elem} key={elem.id} />;
        })}
      </ul>
    );
  }
}

export default ListItems;
