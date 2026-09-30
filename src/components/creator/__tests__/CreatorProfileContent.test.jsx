import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreatorProfileContent from '../CreatorProfileContent';
import {
  CREATOR_PROFILE,
  EMPTY_COURSES_MESSAGE,
  FOLLOW_LABEL,
  FOLLOWERS_LABEL,
  PRODUCTS_LABEL,
} from '../creatorCopy';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('CreatorProfileContent', () => {
  it('renders the studio intro and every course', () => {
    render(<CreatorProfileContent creator={CREATOR_PROFILE} />);

    expect(screen.getByRole('heading', { name: CREATOR_PROFILE.name })).toBeInTheDocument();
    expect(screen.getByText(CREATOR_PROFILE.badge)).toBeInTheDocument();
    expect(screen.getByText(CREATOR_PROFILE.role)).toBeInTheDocument();
    CREATOR_PROFILE.bio.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
    expect(screen.getByText(PRODUCTS_LABEL)).toBeInTheDocument();
    expect(screen.getByText(FOLLOWERS_LABEL)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: FOLLOW_LABEL })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    CREATOR_PROFILE.courses.forEach((course) => {
      expect(screen.getByRole('heading', { name: course.title })).toBeInTheDocument();
    });
    expect(screen.getByRole('link', { name: /build digital asset/i })).toHaveAttribute(
      'href',
      '/courses/digital-asset',
    );
  });

  it('marks the studio as followed', async () => {
    const user = userEvent.setup();
    render(<CreatorProfileContent creator={CREATOR_PROFILE} />);

    await user.click(screen.getByRole('button', { name: FOLLOW_LABEL }));

    expect(screen.getByRole('button', { name: FOLLOW_LABEL })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('closes an open menu on an outside click or Escape', async () => {
    const user = userEvent.setup();
    render(<CreatorProfileContent creator={CREATOR_PROFILE} />);

    await user.click(screen.getByRole('button', { name: 'Category' }));
    expect(screen.getByRole('listbox', { name: 'Category' })).toBeInTheDocument();

    await user.click(screen.getByRole('heading', { name: CREATOR_PROFILE.name }));
    expect(screen.queryByRole('listbox', { name: 'Category' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Category' }));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox', { name: 'Category' })).not.toBeInTheDocument();
  });

  it('filters the catalog by level and restores it', async () => {
    const user = userEvent.setup();
    render(<CreatorProfileContent creator={CREATOR_PROFILE} />);

    await user.click(screen.getByRole('button', { name: 'Level' }));
    await user.click(screen.getByRole('option', { name: 'Advanced' }));

    expect(screen.getByText(EMPTY_COURSES_MESSAGE)).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Learn Figma from Basic' }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Filter' }));

    expect(screen.getByRole('heading', { name: 'Learn Figma from Basic' })).toBeInTheDocument();
  });
});
