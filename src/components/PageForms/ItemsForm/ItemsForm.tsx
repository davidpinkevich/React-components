import { Component } from 'react';
import { TPageForms } from '../../../types/types';
import styles from './ItemsForm.module.scss';

export class ItemsForm extends Component<TPageForms> {
  constructor(props: TPageForms) {
    super(props);
  }
  render() {
    const arrayCheckbox = ['Motorcycling', 'Swimming', 'Hunting', 'Alcohol'];
    const arrayRadio = ['Mercedes', 'Toyota', 'Lada'];

    return (
      <>
        <div className={styles.itemsBody}>
          {this.props.value.map((item, index) => {
            const path = this.props.value[0].file ? true : false;
            const boxes = arrayCheckbox.filter((box, index) => {
              if (item.checkbox[index] === true) return box;
            });
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
                    {boxes.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
                <div>
                  The model of car:
                  <span> {arrayRadio[item.radio.findIndex((item) => item === true)]}</span>
                </div>
                {path && (
                  <div className={styles.imgWrapper}>
                    <img src={URL.createObjectURL(item.file as Blob | MediaSource)} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ItemsForm;
