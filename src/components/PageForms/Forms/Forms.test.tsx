import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Forms from './Forms';

describe('Forms component', () => {
  it('render forms', () => {
    const changeName = () => {
      console.log('mock');
    };
    const changeSub = () => {
      console.log('mock');
    };
    const changePopup = () => {
      console.log('mock');
    };
    render(
      <Forms
        changePopup={changePopup}
        fileName={false}
        changeSub={changeSub}
        changeName={changeName}
      />
    );

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
