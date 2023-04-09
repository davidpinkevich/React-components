import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ItemsForm from './ItemsForm';

describe('ItemsForm component', () => {
  it('render items form', () => {
    const values = [
      {
        name: 'Ivan Petrov',
        date: '2000-12-12',
        radio: 'Mercedes',
        select: 'Belarus',
        file: '',
        checkbox: ['Swimming', 'Hunting'],
      },
    ];
    render(<ItemsForm value={values} />);

    const elements = [
      'Ivan Petrov',
      '2000-12-12',
      'Mercedes',
      'Belarus',
      'Swimming',
      'Hunting',
      'Master:',
      'Stepped on the ground:',
      'Motherland:',
      'Hobbies:',
      'The model of car:',
    ];
    elements.forEach((elem) => {
      const itemElement = screen.getByText(elem);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
