import React, { memo } from 'react';
import { PORTRAIT_SIZE } from './homeAssets';
import { COMMUNITY_BODY, COMMUNITY_TITLE, TESTIMONIALS } from './homeData';

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

const Testimonials = memo(() => (
  <section className="home-community" aria-label="Community">
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

export default Testimonials;
