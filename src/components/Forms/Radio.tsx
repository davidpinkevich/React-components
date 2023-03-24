import { Component } from 'react';
import { TInputsRadio } from '../../types/types';

export class Radio extends Component<TInputsRadio> {
  constructor(props: TInputsRadio) {
    super(props);
  }
  render() {
    const arrayRadio = ['Mercedes', 'Toyota', 'Nissan'];
    return (
      <>
        {arrayRadio.map((elem, index) => {
          return (
            <label key={index}>
              <input type="radio" ref={this.props.values[index]} name="question" value={elem} />
              {elem}
            </label>
          );
        })}
      </>
    );
  }
}

export default Radio;
