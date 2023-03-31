import { TInputsRadio } from '../../../types/types';
import styles from './Radio.module.scss';

const Radio = (props: TInputsRadio) => {
  const arrayRadio = ['Mercedes', 'Toyota', 'Lada'];
  return (
    <div className={styles.radioWrapper}>
      <div className={styles.radioBody}>
        <p>Make the Right Choice: </p>
        {arrayRadio.map((elem, index) => {
          return (
            <label key={index}>
              <input type="radio" {...props.register('radio', { required: true })} value={elem} />
              {elem}
            </label>
          );
        })}
      </div>
      {props.errors.radio && <p className={styles.inputError}>Model must be selected</p>}
    </div>
  );
};

export default Radio;
