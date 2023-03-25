import { Component } from 'react';
import { TInputsCheckbox } from '../../../types/types';
import styles from './Checkbox.module.scss';

export class Checkbox extends Component<TInputsCheckbox> {
  constructor(props: TInputsCheckbox) {
    super(props);
  }
  render() {
    const hobbies = ['Motorcycling', 'Swimming', 'Hunting', 'Alcohol'];
    return (
      <div className={styles.radioWrapper}>
        <div className={styles.checkbox}>
          <p>Choose your passion:</p>
          <div className={styles.checkboxInput}>
            <div className={styles.labelsWrapper}>
              {this.props.values.map((elem, index) => {
                return (
                  <label key={index}>
                    {hobbies[index]}
                    <input type="checkbox" ref={this.props.values[index]} name={hobbies[index]} />
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        {!this.props.valid && <p className={styles.inputError}>Model must be selected</p>}
      </div>
    );
  }
}

export default Checkbox;
