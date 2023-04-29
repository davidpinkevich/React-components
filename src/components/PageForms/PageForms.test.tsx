import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import renderWithProviders from '../../tests/renderWithProviders';
import PageForms from './PageForms';

describe('PageForms component', () => {
  it('render page forms', () => {
    renderWithProviders(<PageForms />);

    const pageElement = screen.getByText('Enter the first and last name with a capital letter:');
    expect(pageElement).toBeInTheDocument();
  });
});
