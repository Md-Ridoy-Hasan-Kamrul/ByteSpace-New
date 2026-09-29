import React from 'react';
import { render, screen } from '@testing-library/react';
import { HOME_COURSES } from '../homeData';
import CourseCard from '../CourseCard';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('CourseCard', () => {
  it('opens the course details page for that course', () => {
    const course = HOME_COURSES.find((item) => item.id === 'digital-asset');
    render(<CourseCard course={course} />);

    expect(screen.getByRole('link', { name: /build digital asset/i })).toHaveAttribute(
      'href',
      '/courses/digital-asset',
    );
  });
});
