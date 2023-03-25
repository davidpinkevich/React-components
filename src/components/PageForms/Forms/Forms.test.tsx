import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Forms from './Forms';

describe('Forms component', () => {
  it('render forms', () => {
    const valid = {
      checkName: false,
      checkDate: false,
      checkRadio: false,
      checkCheckbox: false,
      checkFileName: false,
    };
    const changeName = () => {
      console.log('mock');
    };
    const changeSub = () => {
      console.log('mock');
    };
    render(<Forms valid={valid} fileName={false} onSubmit={changeSub} changeName={changeName} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Who are you traveler?');
  });
});
