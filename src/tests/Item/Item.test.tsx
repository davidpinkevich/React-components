import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import dataItems from '../../data/items-data';
import Item from '../../components/Home/Item/Item';

describe('Item Book', () => {
  it('Item component', () => {
    const book = dataItems[0];
    render(<Item {...book} />);

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('1984');
  });
});
