import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import toast from 'react-hot-toast';
import { ROUTES } from '../../../config';
import RegisterContent from '../RegisterContent';
import { REGISTER_FAILED, REGISTER_SUCCESS } from '../registerCopy';
import { submitRegistration } from '../submitRegistration';

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

jest.mock('../submitRegistration', () => ({
  submitRegistration: jest.fn(),
}));

const renderRegister = () => render(<RegisterContent />);

const fillAccount = async (user) => {
  await user.type(screen.getByLabelText('Full Name'), 'Jamie Davis');
  await user.type(screen.getByLabelText('Email'), 'designer@example.com');
  await user.type(screen.getByLabelText('Password'), 'bytespace');
};

describe('RegisterContent', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    toast.success.mockClear();
    submitRegistration.mockReset();
  });

  it('renders the sign-up story, account form, and login link', () => {
    renderRegister();

    expect(screen.getByRole('heading', { name: /welcome to bytespace/i })).toBeInTheDocument();
    expect(screen.getByText('Create an Account')).toBeInTheDocument();
    expect(screen.getByText(/sign up and come in/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name')).toHaveAttribute('placeholder', 'Jamie Davis');
    expect(screen.getByLabelText('Email')).toHaveAttribute('placeholder', 'designer@example.com');
    expect(screen.getByLabelText('Password')).toHaveAttribute('placeholder', '********');
    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', ROUTES.LOGIN);
    expect(screen.getByText('Build Digital Asset')).toBeInTheDocument();
    expect(screen.getByText('the Power of Big Data')).toBeInTheDocument();
    expect(screen.getByText('Happy Students')).toBeInTheDocument();
  });

  it('shows inline errors and does not submit a blank form', async () => {
    const user = userEvent.setup();
    renderRegister();

    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(screen.getAllByRole('alert')).toHaveLength(3);
    expect(submitRegistration).not.toHaveBeenCalled();
    expect(toast.success).not.toHaveBeenCalled();
  });

  it('shows the server message when registration fails', async () => {
    const user = userEvent.setup();
    submitRegistration.mockResolvedValue({ ok: false, message: REGISTER_FAILED });
    renderRegister();

    await fillAccount(user);
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(REGISTER_FAILED);
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('confirms a valid registration and opens the login page', async () => {
    const user = userEvent.setup();
    submitRegistration.mockResolvedValue({ ok: true });
    renderRegister();

    await fillAccount(user);
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(submitRegistration).toHaveBeenCalledWith({
      fullName: 'Jamie Davis',
      email: 'designer@example.com',
      password: 'bytespace',
    });
    expect(toast.success).toHaveBeenCalledWith(REGISTER_SUCCESS);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.LOGIN);
  });
});
