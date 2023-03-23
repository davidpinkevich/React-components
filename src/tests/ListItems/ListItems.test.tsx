import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ListItems from '../../components/Home/ListItems/ListItems';

describe('List Items', () => {
  it('Making a list of items', () => {
    render(<ListItems />);

    const listItems = screen.getByRole('list');
    expect(listItems).toBeInTheDocument();
  });
});
