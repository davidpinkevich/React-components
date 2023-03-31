import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
  it('renders input element', () => {
    render(<SearchInput />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
});
