import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Item from './Item';

const mockProps = vi.fn();

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
    render(<Item {...itemData} changePopup={mockProps} getId={mockProps} />);

    const title = screen.getByText('Darkstar');
    expect(title).toBeInTheDocument();
  });
});
