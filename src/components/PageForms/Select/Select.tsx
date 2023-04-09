import { TInputsSelect } from '../../../types/types';

const Select = (props: TInputsSelect) => {
  const countries = ['Belarus', 'Russia', 'Kazakhstan', 'Georgia'];
  return (
    <select {...props.register('select')}>
      {countries.map((elem, index) => (
        <option key={index} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  );
};

export default Select;
