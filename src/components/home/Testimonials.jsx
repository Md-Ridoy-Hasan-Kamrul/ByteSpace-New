import React, { memo } from 'react';
import {
  COMMUNITY_BODY,
  COMMUNITY_GLOWS,
  COMMUNITY_TITLE,
  PORTRAIT_SIZE,
  TESTIMONIALS,
} from '../../data/home';

const TestimonialCard = memo(({ testimonial }) => (
  <article className="home-testimonial">
    <img src={testimonial.portrait} alt="" width={PORTRAIT_SIZE} height={PORTRAIT_SIZE} />
    <div>
      <h3>{testimonial.name}</h3>
      <p>{testimonial.role}</p>
    </div>
    <p>&quot;{testimonial.quote}&quot;</p>
  </article>
));

TestimonialCard.displayName = 'TestimonialCard';

export const Testimonials = memo(() => (
  <section className="home-community" aria-label="Community">
    {COMMUNITY_GLOWS.map((glow) => (
      <img
        key={glow.id}
        className={`home-community-glow home-community-glow-${glow.id}`}
        src={glow.src}
        alt=""
      />
    ))}
    <div className="home-wrap">
      <div className="home-community-intro">
        <h2>{COMMUNITY_TITLE}</h2>
        <p>{COMMUNITY_BODY}</p>
      </div>
      <div className="home-testimonial-grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
));

Testimonials.displayName = 'Testimonials';
