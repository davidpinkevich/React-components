import { Component } from 'react';
import { TInputsRadio } from '../../../types/types';
import styles from './Radio.module.scss';

export class Radio extends Component<TInputsRadio> {
  constructor(props: TInputsRadio) {
    super(props);
  }
  render() {
    const arrayRadio = ['Mercedes', 'Toyota', 'Lada'];
    return (
      <div className={styles.radioWrapper}>
        <div className={styles.radioBody}>
          <p>Make the Right Choice: </p>
          {arrayRadio.map((elem, index) => {
            return (
              <label key={index}>
                <input type="radio" ref={this.props.values[index]} name="question" value={elem} />
                {elem}
              </label>
            );
          })}
        </div>
        {!this.props.valid && <p className={styles.inputError}>Model must be selected</p>}
      </div>
    );
  }
}

export default Radio;
