import { TPageForms } from '../../../types/types';
import styles from './ItemsForm.module.scss';

const ItemsForm = (props: TPageForms) => {
  return (
    <>
      <div className={styles.itemsBody}>
        {props.value.map((item, index) => {
          const path = item.file ? true : false;
          return (
            <div key={index} className={styles.itemCard}>
              <div>
                Master: <span>{item.name}</span>
              </div>
              <div>
                Stepped on the ground: <span>{item.date}</span>
              </div>
              <div>
                Motherland: <span>{item.select}</span>
              </div>
              <div>
                <p className={styles.hobbies}>Hobbies:</p>
                <div className={styles.list}>
                  {item.checkbox.map((check, index) => (
                    <p key={index}>{check}</p>
                  ))}
                </div>
              </div>
              <div>
                The model of car: <span> {item.radio}</span>
              </div>
              {path && (
                <div className={styles.imgWrapper}>
                  <img src={item.file} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemsForm;
