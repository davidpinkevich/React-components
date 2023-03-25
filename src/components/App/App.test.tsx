import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders home page by default', () => {
    render(<App />);
    const homeElement = screen.getByText('Current page:');
    expect(homeElement).toBeInTheDocument();
  });
});
