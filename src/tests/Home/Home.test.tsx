import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../../components/Home/Home';

describe('Home', () => {
  it('Home component', () => {
    render(<Home />);

    const menu = screen.getByRole('main');
    expect(menu).toBeInTheDocument();
  });
});
