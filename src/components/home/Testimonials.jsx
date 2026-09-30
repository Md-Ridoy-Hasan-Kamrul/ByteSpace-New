import React, { memo } from 'react';
import {
  COMMUNITY_BODY,
  COMMUNITY_GLOWS,
  COMMUNITY_TITLE,
  PORTRAIT_SIZE,
  TESTIMONIALS,
} from '../../data/home';

const TestimonialCard = memo(({ testimonial }) => (
  <article className="group flex flex-col gap-6 rounded-[1.5rem] bg-white p-6">
    <img className="rounded-[999px]" src={testimonial.portrait} alt="" width={PORTRAIT_SIZE} height={PORTRAIT_SIZE} />
    <div>
      <h3 className="font-display text-[1.125rem] leading-[28px] font-semibold tracking-[-0.01em] text-black group-first:leading-[1.2] md:text-[1.25rem]">
        {testimonial.name}
      </h3>
      <p className="text-brand-blue text-[0.875rem] font-normal leading-[1.6] md:text-[1.125rem]">{testimonial.role}</p>
    </div>
    <p className="text-copy text-[1rem] font-normal leading-[1.6] md:text-[1.125rem]">&quot;{testimonial.quote}&quot;</p>
  </article>
));

TestimonialCard.displayName = 'TestimonialCard';

export const Testimonials = memo(() => (
  <section className="overflow-hidden relative bg-paper pt-[74px] pb-[57px] [-webkit-font-smoothing:antialiased]" aria-label="Community">
    {COMMUNITY_GLOWS.map((glow) => (
      <img
        key={glow.id}
        className={`pointer-events-none absolute max-w-none ${glow.className}`}
        src={glow.src}
        alt=""
      />
    ))}
    <div className="mx-auto w-[min(100%_-_2.5rem,_75.25rem)] relative z-1">
      <div className="gap-6 flex flex-col md:gap-[43px] md:flex-row md:items-end">
        <h2 className="font-display font-semibold tracking-[-0.01em] leading-[1.25] text-[rgb(0,_0,_0)] text-[clamp(1.5rem,_6.5vw,_1.75rem)] md:leading-[1.2] md:text-[clamp(1.75rem,_4vw,_2.75rem)] md:grow-0 md:shrink md:basis-[577px]">{COMMUNITY_TITLE}</h2>
        <p className="text-copy text-[1rem] font-normal leading-[1.6] md:text-[1.125rem] md:grow-0 md:shrink md:basis-[580px]">{COMMUNITY_BODY}</p>
      </div>
      <div className="grid [align-items:start] gap-y-6 gap-x-[41px] mt-[72px] lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
));

Testimonials.displayName = 'Testimonials';
