import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchContent from '../SearchContent';
import { EMPTY_RESULTS_MESSAGE, SEARCH_TOPICS } from '../searchCopy';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: { success: jest.fn() },
}));

describe('SearchContent', () => {
  it('renders the search hero, filters, featured topics, and course grid', () => {
    render(<SearchContent />);

    expect(screen.getByRole('heading', { name: 'Find Your Next Course' })).toBeInTheDocument();
    expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Courses' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Filter' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Level' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Category' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Most relevant' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Featured' })).toHaveAttribute('aria-pressed', 'true');
    SEARCH_TOPICS.forEach((topic) => {
      expect(screen.getByRole('button', { name: topic })).toBeInTheDocument();
    });
    expect(screen.getByRole('heading', { name: 'Learn Figma from Basic' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'the Power of Big Data' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page');
  });

  it('filters the grid from the search field', async () => {
    const user = userEvent.setup();
    render(<SearchContent />);

    await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'big data');
    await user.click(screen.getByRole('button', { name: 'Courses' }));

    expect(screen.getByRole('heading', { name: 'the Power of Big Data' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Learn Figma from Basic' })).not.toBeInTheDocument();
  });

  it('filters the grid when a topic chip is selected', async () => {
    const user = userEvent.setup();
    render(<SearchContent />);

    await user.click(screen.getByRole('button', { name: 'Cooking' }));

    expect(screen.getByRole('button', { name: 'Cooking' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText(EMPTY_RESULTS_MESSAGE)).toBeInTheDocument();
  });

  it('filters by level from the level menu', async () => {
    const user = userEvent.setup();
    render(<SearchContent />);

    await user.click(screen.getByRole('button', { name: 'Level' }));
    await user.click(screen.getByRole('option', { name: 'Advanced' }));

    expect(screen.getByText(EMPTY_RESULTS_MESSAGE)).toBeInTheDocument();
  });
});
