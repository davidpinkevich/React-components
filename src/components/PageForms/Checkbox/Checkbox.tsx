import { TInputsCheckbox } from '../../../types/types';
import styles from './Checkbox.module.scss';

function Checkbox(props: TInputsCheckbox) {
  const hobbies = ['Motorcycling', 'Swimming', 'Hunting', 'Alcohol'];
  return (
    <div className={styles.radioWrapper}>
      <div className={styles.checkbox}>
        <p>Choose your passion:</p>
        <div className={styles.checkboxInput}>
          <div className={styles.labelsWrapper}>
            {hobbies.map((elem, index) => {
              return (
                <label key={index}>
                  {hobbies[index]}
                  <input
                    type="checkbox"
                    {...props.register('checkbox', { required: true })}
                    value={elem}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>
      {props.errors.checkbox && <p className={styles.inputError}>Choose at least one dream</p>}
    </div>
  );
}

export default Checkbox;
