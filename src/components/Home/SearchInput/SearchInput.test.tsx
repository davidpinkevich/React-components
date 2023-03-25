import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
  it('renders input element', () => {
    const udpateSearch = (search: string): void => {
      console.log(search);
    };
    render(<SearchInput udpateSearch={udpateSearch} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
});
