import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import renderWithProviders from '../../tests/renderWithProviders';
import Home from './Home';

describe('Home', () => {
  it('Home component', () => {
    renderWithProviders(<Home />);

    const menu = screen.getByRole('main');
    expect(menu).toBeInTheDocument();
  });
});
