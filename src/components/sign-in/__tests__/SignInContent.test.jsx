import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import toast from 'react-hot-toast';
import { ROUTES } from '../../../config';
import SignInContent from '../SignInContent';
import { SIGN_IN_SUCCESS } from '../signInCopy';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
  useNavigate: () => mockNavigate,
}));

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
  },
}));

describe('SignInContent', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    toast.success.mockClear();
  });

  it('renders the Figma sign-in card and the create-account link', () => {
    render(<SignInContent />);

    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument();
    expect(screen.getByText(/sign in with ease/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toHaveAttribute('placeholder', 'designer@example.com');
    expect(screen.getByLabelText('Password')).toHaveAttribute('placeholder', '********');
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue with Facebook' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue with Google' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Create an account' })).toHaveAttribute(
      'href',
      ROUTES.REGISTER,
    );
  });

  it('shows inline errors and stays on the page when the form is blank', async () => {
    const user = userEvent.setup();
    render(<SignInContent />);

    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    expect(screen.getAllByRole('alert')).toHaveLength(2);
    expect(toast.success).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('confirms a valid sign-in and returns home', async () => {
    const user = userEvent.setup();
    render(<SignInContent />);

    await user.type(screen.getByLabelText('Email'), 'designer@example.com');
    await user.type(screen.getByLabelText('Password'), 'bytespace');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    expect(toast.success).toHaveBeenCalledWith(SIGN_IN_SUCCESS);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.HOME);
  });
});
