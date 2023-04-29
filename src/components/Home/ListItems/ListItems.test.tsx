import { screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import renderWithProviders from '../../../tests/renderWithProviders';
import ListItems from './ListItems';

const mockProps = vi.fn();

const itemData = [
  {
    id: 1009266,
    name: 'Darkstar',
    description: '',
    series: { items: [{ name: 'Avengers (1998 - 2004)' }] },
    comics: { items: [{ name: 'New X-Men (Hardcover)' }] },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/20/4ce59f77ea6f1',
      extension: 'jpg',
    },
    changePopup: mockProps,
    getId: mockProps,
  },
  {
    id: 1011020,
    name: 'Darkhawk',
    description: '',
    series: {
      items: [
        { name: 'Darkhawk: Heart Of The Hawk (2021)' },
        { name: 'Guardians Of The Galaxy Vol. 2: Faithless (2020)' },
      ],
    },
    comics: { items: [{ name: 'Avengers (1998) #1' }] },
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/20/4ce59f77ea6f1',
      extension: 'jpg',
    },
    changePopup: mockProps,
    getId: mockProps,
  },
];
describe('Item', () => {
  it('Item component', () => {
    renderWithProviders(<ListItems results={itemData} />);

    const names = ['Darkstar', 'Darkhawk'];
    names.map((elem) => {
      expect(screen.getByText(elem)).toBeInTheDocument();
    });
  });
});
