import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  it('renders checkbox elements', () => {
    const inputsCheckbox = new Array(4).fill('').map(() => createRef<HTMLInputElement>());
    render(<Checkbox valid={true} values={inputsCheckbox} />);

    const hobbies = ['Motorcycling', 'Swimming', 'Hunting', 'Alcohol'];
    hobbies.forEach((elem) => {
      const checkboxElement = screen.getByText(elem);
      expect(checkboxElement).toBeInTheDocument();
    });
  });
});
