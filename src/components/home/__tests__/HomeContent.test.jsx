import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import toast from 'react-hot-toast';
import HomeContent from '../HomeContent';
import {
  CREATOR_BENEFITS,
  FEATURED_TOPIC,
  FOOTER_LINK_GROUPS,
  GROWTH_STATS,
  HERO_SUBTITLE,
  HOME_CATEGORIES,
  TESTIMONIALS,
} from '../homeData';

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
  success: jest.fn(),
}));

const renderHome = () => render(<HomeContent />);

describe('HomeContent', () => {
  beforeEach(() => {
    toast.success.mockClear();
  });

  it('renders the hero, discovery, growth, creator, and community sections', () => {
    renderHome();

    expect(
      screen.getByRole('heading', { name: /get access to hundreds courses available/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(HERO_SUBTITLE)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /discover your passion, build your skills/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /explore diverse learning paths at bytespace/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /your path to professional growth starts here/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /create & manage courses easily/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /unlock your potential as a creator with bytespace/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /discover what our community is saying/i }),
    ).toBeInTheDocument();
  });

  it('lists featured categories, growth stats, benefits, and testimonials', () => {
    renderHome();

    HOME_CATEGORIES.forEach((category) => {
      expect(screen.getAllByRole('link', { name: category.label }).length).toBeGreaterThan(0);
    });
    GROWTH_STATS.forEach((stat) => {
      expect(screen.getAllByText(stat.value).length).toBeGreaterThan(0);
      expect(screen.getAllByText(stat.label).length).toBeGreaterThan(0);
    });
    CREATOR_BENEFITS.forEach((benefit) => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
    });
  });

  it('opens the search page from the hero search', async () => {
    const user = userEvent.setup();
    mockNavigate.mockClear();
    renderHome();

    await user.type(screen.getByRole('searchbox', { name: /course, topic, creator/i }), 'big data');
    await user.click(screen.getByRole('button', { name: /^search$/i }));

    expect(mockNavigate).toHaveBeenCalledWith('/search?q=big+data');
  });

  it('filters courses when a topic chip is selected', async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole('button', { name: 'Data Science' }));

    expect(screen.getByRole('button', { name: 'Data Science' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: FEATURED_TOPIC })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    expect(screen.getByRole('heading', { name: 'the Power of Big Data' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Learn Figma from Basic' })).not.toBeInTheDocument();
  });

  it('shows an empty state when nothing matches', async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole('button', { name: 'Cooking' }));

    expect(screen.getByText(/no courses match/i)).toBeInTheDocument();
  });

  it('shows an inline newsletter error and does not toast it', async () => {
    const user = userEvent.setup();
    renderHome();

    await user.type(screen.getByRole('textbox', { name: /email/i }), 'not-an-email');
    await user.click(screen.getByRole('button', { name: /subscribe/i }));

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i);
    expect(toast.success).not.toHaveBeenCalled();
  });

  it('confirms a valid newsletter subscription', async () => {
    const user = userEvent.setup();
    renderHome();

    await user.type(screen.getByRole('textbox', { name: /email/i }), 'learner@bytespace.com');
    await user.click(screen.getByRole('button', { name: /subscribe/i }));

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(toast.success).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/you are subscribed/i)).toBeInTheDocument();
  });

  it('points the navbar at home, courses, creators, sign in, and join us', () => {
    renderHome();

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Courses' })).toHaveAttribute('href', '/search');
    expect(screen.getByRole('link', { name: 'Creators' })).toHaveAttribute(
      'href',
      '/creators/purepearl',
    );
    expect(screen.getByRole('link', { name: 'Sign In' })).toHaveAttribute('href', '/sign-in');
    expect(screen.getByRole('link', { name: 'Join Us' })).toHaveAttribute('href', '/register');
    expect(screen.getByRole('link', { name: 'Shopping bag' })).toHaveAttribute('href', '#courses');
    expect(screen.getByRole('link', { name: 'Join as Creator' })).toHaveAttribute('href', '/register');
  });

  it('opens and closes the mobile header menu', async () => {
    const user = userEvent.setup();
    renderHome();

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument();

    await user.click(menuButton);
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close menu/i }));
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument();
  });

  it('exposes footer destinations from the design', () => {
    renderHome();

    FOOTER_LINK_GROUPS.flat().forEach((link) => {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0);
    });
    expect(screen.getByText(/2023 bytespace/i)).toBeInTheDocument();
  });
});
