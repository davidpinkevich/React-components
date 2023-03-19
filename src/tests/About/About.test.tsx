import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import About from '../../components/About/About';

describe('About', () => {
  it('About component', () => {
    render(<About />);

    const listItems = screen.getByRole('main');
    expect(listItems).toHaveTextContent('About');
  });
});
