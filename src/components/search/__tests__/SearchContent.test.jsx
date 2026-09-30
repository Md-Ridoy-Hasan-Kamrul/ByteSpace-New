import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchContent from '../SearchContent';
import { EMPTY_RESULTS_MESSAGE, PAGE_SIZE, SEARCH_TOPICS } from '../searchCopy';

const mockSearch = { value: '' };

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
  useSearchParams: () => [new URLSearchParams(mockSearch.value)],
}));

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: { success: jest.fn() },
}));

describe('SearchContent', () => {
  beforeEach(() => {
    mockSearch.value = '';
    window.scrollTo = jest.fn();
  });

  it('scrolls back to the top when the page changes', async () => {
    const user = userEvent.setup();
    render(<SearchContent />);

    await user.click(screen.getByRole('button', { name: 'Page 2' }));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('closes an open menu on an outside click or Escape', async () => {
    const user = userEvent.setup();
    render(<SearchContent />);

    await user.click(screen.getByRole('button', { name: 'Category' }));
    expect(screen.getByRole('listbox', { name: 'Category' })).toBeInTheDocument();

    await user.click(screen.getByRole('heading', { name: 'Find Your Next Course' }));
    expect(screen.queryByRole('listbox', { name: 'Category' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Category' }));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox', { name: 'Category' })).not.toBeInTheDocument();
  });

  it('renders the search hero, filters, featured topics, and course grid', () => {
    render(<SearchContent />);

    expect(screen.getAllByRole('heading', { name: 'Find Your Next Course' })).not.toHaveLength(0);
    expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Courses' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Filter' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Level' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Category' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Most relevant' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Featured' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    SEARCH_TOPICS.forEach((topic) => {
      expect(screen.getByRole('button', { name: topic })).toBeInTheDocument();
    });
    expect(screen.getAllByRole('heading', { name: 'Learn Figma from Basic' })).not.toHaveLength(0);
    expect(screen.getAllByRole('heading', { name: 'the Power of Big Data' })).not.toHaveLength(0);
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page');
  });

  it('shows 18 cards on each of five pages', async () => {
    const user = userEvent.setup();
    render(<SearchContent />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PAGE_SIZE);
    [1, 2, 3, 4, 5].forEach((page) => {
      expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument();
    });
    expect(screen.queryByRole('button', { name: 'Page 6' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Page 5' }));

    expect(screen.getByRole('button', { name: 'Page 5' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(PAGE_SIZE);
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
  });

  it('applies the query carried from the home hero', () => {
    mockSearch.value = 'q=big+data';
    render(<SearchContent />);

    expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveValue('big data');
    expect(screen.getAllByRole('heading', { name: 'the Power of Big Data' })).not.toHaveLength(0);
    expect(
      screen.queryByRole('heading', { name: 'Learn Figma from Basic' }),
    ).not.toBeInTheDocument();
  });

  it('filters the grid from the search field', async () => {
    const user = userEvent.setup();
    render(<SearchContent />);

    await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'big data');
    await user.click(screen.getByRole('button', { name: 'Courses' }));

    expect(screen.getAllByRole('heading', { name: 'the Power of Big Data' })).not.toHaveLength(0);
    expect(
      screen.queryByRole('heading', { name: 'Learn Figma from Basic' }),
    ).not.toBeInTheDocument();
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
