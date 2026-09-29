import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseAbout from '../CourseAbout';
import {
  COURSE_DETAILS,
  DESCRIPTION_HEADING,
  KEY_POINTS_HEADING,
  SNEAK_PEEK_HEADING,
} from '../courseDetailsCopy';

describe('CourseAbout', () => {
  it('renders the description, sneak peeks, and key points from the design', () => {
    render(<CourseAbout course={COURSE_DETAILS} />);

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent);
    expect(headings).toEqual([DESCRIPTION_HEADING, SNEAK_PEEK_HEADING, KEY_POINTS_HEADING]);

    COURSE_DETAILS.description.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });

    const peeks = screen.getAllByRole('img', { name: /sneak peek/i });
    expect(peeks).toHaveLength(COURSE_DETAILS.sneakPeeks.length);
    peeks.forEach((peek, index) => {
      expect(peek).toHaveAttribute('src', COURSE_DETAILS.sneakPeeks[index].src);
    });

    COURSE_DETAILS.keyPoints.forEach((point) => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });
});
