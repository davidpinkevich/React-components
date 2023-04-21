import { screen } from '@testing-library/react';
import renderWithProviders from '../../../tests/renderWithProviders';
import { describe, it } from 'vitest';
import Forms from './Forms';

describe('Forms component', () => {
  it('render forms', () => {
    renderWithProviders(<Forms />);

    const texts = [
      'Enter the first and last name with a capital letter:',
      'Enter your date of birth:',
      'Where are you from:',
      'ADD PHOTO',
      'Make the Right Choice:',
      'Mercedes',
      'Toyota',
      'Lada',
      'Choose your passion:',
      'Motorcycling',
      'Swimming',
      'Hunting',
      'Alcohol',
      'Choose your photo:',
      'Create Card',
    ];
    texts.forEach((text) => {
      const textFind = screen.getByText(text);
      expect(textFind).toBeInTheDocument();
    });
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Who are you traveler?');
  });
});
