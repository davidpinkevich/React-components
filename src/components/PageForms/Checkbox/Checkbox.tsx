import { Component } from 'react';
import { TInputsCheckbox } from '../../../types/types';

export class Checkbox extends Component<TInputsCheckbox> {
  constructor(props: TInputsCheckbox) {
    super(props);
  }
  render() {
    const hobbies = ['Motorcycling', 'Swimming', 'Hunting', 'Alcohol'];
    return (
      <>
        {this.props.values.map((elem, index) => {
          return (
            <label key={index}>
              {hobbies[index]}
              <input type="checkbox" ref={this.props.values[index]} name={hobbies[index]} />
            </label>
          );
        })}
      </>
    );
  }
}

export default Checkbox;
