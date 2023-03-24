import { Component } from 'react';
import { TInputsSelect } from '../../../types/types';

class Select extends Component<TInputsSelect> {
  constructor(props: TInputsSelect) {
    super(props);
  }
  render() {
    const countries = ['Belarus', 'Russia', 'Kazakhstan', 'Georgia'];
    return (
      <select ref={this.props.values}>
        {countries.map((elem, index) => (
          <option key={index} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
