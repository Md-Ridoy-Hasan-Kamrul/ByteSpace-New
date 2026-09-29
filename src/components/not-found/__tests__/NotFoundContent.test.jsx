import React from 'react';
import { render, screen } from '@testing-library/react';
import { ROUTES } from '../../../config';
import NotFoundContent from '../NotFoundContent';
import { NOT_FOUND_CODE, NOT_FOUND_HINT, NOT_FOUND_HOME, NOT_FOUND_TITLE } from '../notFoundCopy';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('NotFoundContent', () => {
  it('shows the missing-page message and a way home', () => {
    render(<NotFoundContent />);

    expect(screen.getByText(NOT_FOUND_CODE)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: NOT_FOUND_TITLE })).toBeInTheDocument();
    expect(screen.getByText(NOT_FOUND_HINT)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: NOT_FOUND_HOME })).toHaveAttribute('href', ROUTES.HOME);
  });
});
