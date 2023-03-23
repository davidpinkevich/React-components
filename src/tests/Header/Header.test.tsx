import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import Header from '../../components/Header/Header';

describe('Header', () => {
  it('renders header element', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const header = screen.getByText('Current page:');
    expect(header).toBeInTheDocument();
  });
});
