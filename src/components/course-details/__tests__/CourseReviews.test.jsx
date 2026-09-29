import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CourseReviews from '../CourseReviews';
import {
  ALL_RATING_LABEL,
  COURSE_REVIEWS,
  RATING_ROWS,
  REVIEW_COPY,
  REVIEW_ROLE,
  REVIEW_RATING,
  REVIEW_TIME,
  RATING_FILTERS,
  starFilterLabel,
} from '../courseDetailsCopy';

const unmatchedRating = RATING_FILTERS.find((score) => score !== REVIEW_RATING);

describe('CourseReviews', () => {
  it('renders the summary, rating breakdown, and every review', () => {
    render(<CourseReviews />);

    expect(screen.getByRole('heading', { name: REVIEW_COPY.summaryHeading })).toBeInTheDocument();
    expect(screen.getByText(REVIEW_COPY.summaryBody)).toBeInTheDocument();
    expect(screen.getByText(REVIEW_COPY.ratingsLabel)).toBeInTheDocument();
    expect(screen.getByText(REVIEW_COPY.ratingsScore)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: REVIEW_COPY.listHeading })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: ALL_RATING_LABEL })).toHaveAttribute(
      'aria-pressed',
      'true',
    );

    RATING_ROWS.forEach((row) => {
      expect(screen.getByText(row.count)).toBeInTheDocument();
    });

    COURSE_REVIEWS.forEach((review) => {
      expect(screen.getByRole('heading', { name: review.name })).toBeInTheDocument();
      expect(screen.getByText(review.body)).toBeInTheDocument();
    });

    expect(screen.getAllByText(REVIEW_ROLE)).toHaveLength(COURSE_REVIEWS.length);
    expect(screen.getAllByText(REVIEW_TIME)).toHaveLength(COURSE_REVIEWS.length);
  });

  it('filters the list to the selected star score and restores it', async () => {
    const user = userEvent.setup();
    render(<CourseReviews />);

    await user.click(screen.getByRole('button', { name: starFilterLabel(unmatchedRating) }));

    expect(screen.getByRole('button', { name: starFilterLabel(unmatchedRating) })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    COURSE_REVIEWS.forEach((review) => {
      expect(screen.queryByRole('heading', { name: review.name })).not.toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: ALL_RATING_LABEL }));

    COURSE_REVIEWS.forEach((review) => {
      expect(screen.getByRole('heading', { name: review.name })).toBeInTheDocument();
    });
  });
});
