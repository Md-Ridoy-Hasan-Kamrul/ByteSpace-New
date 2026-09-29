import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseLessons from '../CourseLessons';
import { COURSE_MODULES, LESSON_COPY } from '../courseDetailsCopy';

describe('CourseLessons', () => {
  it('renders the module list, lesson notes, and progress from the design', () => {
    render(<CourseLessons />);

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent);
    expect(headings).toEqual([
      LESSON_COPY.exploreHeading,
      LESSON_COPY.listHeading,
      LESSON_COPY.contentHeading,
      LESSON_COPY.trackingHeading,
    ]);

    expect(screen.getByText(LESSON_COPY.exploreBody)).toBeInTheDocument();
    expect(screen.getByText(LESSON_COPY.contentBody)).toBeInTheDocument();
    expect(screen.getByText(LESSON_COPY.trackingBody)).toBeInTheDocument();

    COURSE_MODULES.forEach((module) => {
      expect(screen.getByText(module.title)).toBeInTheDocument();
      expect(screen.getByText(module.body)).toBeInTheDocument();
    });

    expect(screen.getByText(LESSON_COPY.progressLabel)).toBeInTheDocument();
    expect(screen.getByText(LESSON_COPY.progressValue)).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: LESSON_COPY.progressLabel })).toHaveAttribute(
      'aria-valuenow',
      String(LESSON_COPY.progressPercent),
    );
  });
});
