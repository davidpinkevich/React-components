import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ItemsForm from './ItemsForm';

describe('ItemsForm component', () => {
  it('render items form', () => {
    const state = {
      value: [
        {
          checkbox: [true, true, false, false],
          date: '1990-12-12',
          fileName: '23.jpg',
          name: 'Mister Trevoni',
          radio: [true, false, false],
          select: 'Russia',
          file: '',
        },
      ],
      valid: {
        checkName: false,
        checkDate: false,
        checkRadio: false,
        checkCheckbox: false,
        checkFileName: false,
      },
      fileName: false,
      popup: false,
    };
    render(<ItemsForm {...state} />);

    const itemElement = screen.getByText('Mister Trevoni');
    expect(itemElement).toBeInTheDocument();
  });
});
