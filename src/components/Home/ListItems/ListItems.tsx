import { TListItems } from '../../../types/types';
import Item from '../Item/Item';
import styles from './ListItems.module.scss';

const ListItems = (props: TListItems) => {
  return (
    <ul className={styles.listItems}>
      {props.results.map((elem) => {
        return <Item {...elem} key={elem.id} />;
      })}
    </ul>
  );
};

export default ListItems;
