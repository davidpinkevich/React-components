import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, vi } from 'vitest';
import Home from './Home';
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
  it('rendering the page with the initial fetch request and checking the rendering of the modal window with additional information', async () => {
    const mockJson = Promise.resolve(mockObjectData);
    const mockFetch = Promise.resolve({ json: () => mockJson });
    global.fetch = vi.fn().mockImplementation(() => mockFetch);

    render(<Home />);
    expect(await screen.findByText('A.I.M.')).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);

    const li = document.querySelectorAll('[data-testid=li-item]');
    fireEvent.click(li[0]);

    const modalItems = [
      'Uncanny X-Men (1963 - 2011)',
      'Uncanny X-Men Omnibus Vol. 1 (Hardcover)',
      'Iceman (2017 - 2018)',
      "Marvel's Voices: Pride (2021)",
    ];
    modalItems.map((elem) => {
      expect(screen.getByText(elem)).toBeInTheDocument();
    });
  });
});
