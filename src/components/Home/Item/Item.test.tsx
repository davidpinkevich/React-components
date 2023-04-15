import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import renderWithProviders from '../../../tests/renderWithProviders';
import Item from './Item';

const itemData = {
  id: 1009266,
  name: 'Darkstar',
  description: '',
  series: { items: [{ name: 'Avengers (1998 - 2004)' }] },
  comics: { items: [{ name: 'New X-Men (Hardcover)' }] },
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/20/4ce59f77ea6f1',
    extension: 'jpg',
  },
};
describe('Item', () => {
  it('Item component', () => {
    renderWithProviders(<Item {...itemData} />);

    const title = screen.getByText('Darkstar');
    expect(title).toBeInTheDocument();
  });
});
