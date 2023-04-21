import { screen } from '@testing-library/react';
import renderWithProviders from '../../tests/renderWithProviders';
import App from './App';

describe('App component', () => {
  it('renders home page by default', () => {
    renderWithProviders(<App />);
    const homeElement = screen.getByText('Current page:');
    expect(homeElement).toBeInTheDocument();
  });
});
