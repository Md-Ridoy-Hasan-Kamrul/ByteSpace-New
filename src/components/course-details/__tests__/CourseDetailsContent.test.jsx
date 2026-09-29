import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import toast from 'react-hot-toast';
import CourseDetailsContent from '../CourseDetailsContent';
import {
  ABOUT_TAB,
  COURSE_DETAILS,
  ENROLL_SUCCESS_MESSAGE,
  LESSONS_ABOUT_LABEL,
  LESSONS_TAB,
  REVIEWS_TAB,
  SHARE_SUCCESS_MESSAGE,
} from '../courseDetailsCopy';

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

const renderDetails = () => render(<CourseDetailsContent />);

describe('CourseDetailsContent', () => {
  beforeEach(() => {
    toast.success.mockClear();
    if (!navigator.clipboard) {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: { writeText: () => Promise.resolve() },
      });
    }
    jest.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
  });

  it('renders the course hero, purchase card, and about panel', () => {
    renderDetails();

    expect(screen.getByRole('heading', { name: COURSE_DETAILS.title })).toBeInTheDocument();
    expect(screen.getByText(COURSE_DETAILS.subtitle)).toBeInTheDocument();
    expect(screen.getByText(COURSE_DETAILS.creator)).toBeInTheDocument();
    expect(screen.getByText(COURSE_DETAILS.level)).toBeInTheDocument();
    expect(screen.getByText(COURSE_DETAILS.ratingLabel)).toBeInTheDocument();
    expect(screen.getByText(COURSE_DETAILS.studentsLabel)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Share' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Play preview' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: ABOUT_TAB })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: LESSONS_ABOUT_LABEL })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    expect(screen.getByRole('heading', { name: 'Description' })).toBeInTheDocument();
    expect(screen.getByText(COURSE_DETAILS.description[0])).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /sneak peek/i })).toHaveLength(
      COURSE_DETAILS.sneakPeeks.length,
    );
    COURSE_DETAILS.keyPoints.forEach((point) => {
      expect(screen.getAllByText(point).length).toBeGreaterThan(0);
    });
    expect(screen.getByRole('heading', { name: COURSE_DETAILS.lessonSummary })).toBeInTheDocument();
    expect(screen.getByText(COURSE_DETAILS.price)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enroll Now' })).toBeInTheDocument();
    COURSE_DETAILS.includes.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
    expect(screen.getByText(COURSE_DETAILS.studioName)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'See Full Profile' })).toHaveAttribute(
      'href',
      '/creators/purepearl',
    );
  });

  it('shows the lesson list when Lessons is selected', async () => {
    const user = userEvent.setup();
    renderDetails();

    await user.click(screen.getByRole('button', { name: LESSONS_ABOUT_LABEL }));

    expect(screen.getByRole('button', { name: LESSONS_TAB })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.queryByRole('heading', { name: 'Description' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Explore the Modules' })).toBeInTheDocument();
    COURSE_DETAILS.lessons.forEach((lesson) => {
      expect(screen.getAllByText(lesson.title).length).toBeGreaterThan(0);
    });
    expect(screen.getAllByText(COURSE_DETAILS.moreLessonsLabel).length).toBeGreaterThan(0);
  });

  it('shows the review summary when Reviews is selected', async () => {
    const user = userEvent.setup();
    renderDetails();

    await user.click(screen.getByRole('button', { name: REVIEWS_TAB }));

    expect(screen.getByRole('button', { name: REVIEWS_TAB })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: LESSONS_TAB })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    expect(screen.getByRole('heading', { name: 'What Learners Are Saying' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'PurePearl Studio' })).toBeInTheDocument();
  });

  it('opens the lesson list from the preview control', async () => {
    const user = userEvent.setup();
    renderDetails();

    await user.click(screen.getByRole('button', { name: 'Play preview' }));

    expect(screen.getByRole('button', { name: LESSONS_TAB })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('confirms enrollment', async () => {
    const user = userEvent.setup();
    renderDetails();

    await user.click(screen.getByRole('button', { name: 'Enroll Now' }));

    expect(toast.success).toHaveBeenCalledWith(ENROLL_SUCCESS_MESSAGE);
  });

  it('copies the course link when Share is used', async () => {
    const user = userEvent.setup();
    renderDetails();

    await user.click(screen.getByRole('button', { name: 'Share' }));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith(SHARE_SUCCESS_MESSAGE);
    });
  });
});
