import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import NotFound from '../../components/NotFound/NotFound';

describe('Not Found', () => {
  it('Not Found component', () => {
    render(<NotFound />);

    const notFound = screen.getByRole('main');
    expect(notFound).toHaveTextContent('Not Found');
  });
});
