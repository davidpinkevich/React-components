import { useSelector } from 'react-redux';
import { TStore } from '../../types/types';
import Forms from './Forms/Forms';
import ItemsForm from './ItemsForm/ItemsForm';
import styles from './PageForms.module.scss';

const PageForms = () => {
  const { items, popup } = useSelector((state: TStore) => state.form);
  return (
    <>
      {popup && <p className={styles.cardSuccessfully}>Card created successfully!</p>}
      <Forms />
      {items.length ? <p className={styles.list}>List of cards:</p> : ''}
      <ItemsForm value={items} />
    </>
  );
};

export default PageForms;
