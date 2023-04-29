import { expect, describe, it, vi, Mock } from 'vitest';
import { useSelector } from 'react-redux';
import { useGetItemsQuery } from './apiSlice/apiSlice';
import { render, screen } from '@testing-library/react';
import Home from './Home';

vi.mock('./apiSlice/apiSlice');
vi.mock('react-redux');
const mockObjectData = {
  data: {
    results: [
      {
        id: 1011050,
        name: 'A.I.M.',
        description: '',
        series: {
          items: [
            { name: 'Uncanny X-Men (1963 - 2011)' },
            { name: 'Iceman (2017 - 2018)' },
            { name: "Marvel's Voices: Pride (2021)" },
          ],
        },
        comics: { items: [{ name: 'Uncanny X-Men Omnibus Vol. 1 (Hardcover)' }] },
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
      },
    ],
  },
};

describe('Home component', () => {
  beforeEach(() => {
    (useSelector as Mock).mockReturnValue({ data: {} });
  });

  afterEach(() => {
    expect(useGetItemsQuery).toHaveBeenCalled();
  });

  it('display cards on the page on successful response', () => {
    (useGetItemsQuery as Mock).mockReturnValue({ data: mockObjectData });

    render(<Home />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('A.I.M');
  });

  it('page display while waiting for a response', () => {
    (useGetItemsQuery as Mock).mockReturnValue({ isFetching: true });

    render(<Home />);
    expect(screen.getByText('Find heroes')).toBeInTheDocument();
  });

  it('display cards on page on server side error', () => {
    (useGetItemsQuery as Mock).mockReturnValue({ isError: true });

    render(<Home />);
    expect(screen.getByText('Request error')).toBeInTheDocument();
  });

  it('display cards on the page when the user searches incorrectly', () => {
    (useGetItemsQuery as Mock).mockReturnValue({ isFetching: false });

    render(<Home />);
    expect(
      screen.getByText('Characters were not found, start typing the first letters of the name')
    ).toBeInTheDocument();
  });
});
