import { memo } from 'react';
import {
  AVATAR_MORE,
  CREATOR_BENEFITS,
  CREATOR_BODY,
  CREATOR_LEAD,
  CREATOR_TITLE,
  GROWTH_BODY,
  GROWTH_CREATOR,
  GROWTH_GLOW,
  GROWTH_GLOW_LIME,
  GROWTH_ORNAMENTS,
  GROWTH_STATS,
  GROWTH_TITLE,
  HAPPY_STUDENTS_COUNT,
  HAPPY_STUDENTS_EXTRA,
  HAPPY_STUDENTS_LABEL,
  HAPPY_STUDENTS_RATING,
  HERO_AVATARS,
  HERO_AVATAR_SIZE,
  HERO_STUDENT,
  HOME_COURSES,
  ICON_CHECK,
  ICON_SIZE,
  ICON_STAR,
  ICON_STAR_LIME,
  LEARNER_MORE_DARK,
  LEARNING_PROGRESS_LABEL,
  REVENUE_AMOUNT,
  REVENUE_DELTA,
  REVENUE_LABEL,
  REVENUE_RANGE,
  YEAR_TO_DATE_AMOUNT,
  YEAR_TO_DATE_LABEL,
  YEAR_TO_DATE_YEAR,
} from '../../data/home';
import { AvatarStack, CourseCard } from '../CourseCard';
import { OrnamentField } from '../Ornaments';

// Layout follows Figma "Frame 15": intro copy + course illustration, then
// creator illustration + creator copy. Illustrations are decorative, so they are inert.

const GROWTH_COURSE = HOME_COURSES[0];

const BAR_TONE = { soft: 'bg-[rgb(246,_246,_246)]', light: 'bg-white' };

const ProgressBar = memo(({ tone }) => (
  <span className={`block h-[8px] w-[200px] rounded-[24px] ${BAR_TONE[tone]}`} aria-hidden="true">
    <span className="rounded-[inherit] block w-[112px] h-full bg-brand-lime" />
  </span>
));

ProgressBar.displayName = 'ProgressBar';

const GrowthStats = memo(() => (
  <ul className="flex flex-wrap items-end gap-y-4 gap-x-8 md:gap-y-6 xl:gap-[56px] xl:flex-nowrap">
    {GROWTH_STATS.map((stat) => (
      <li className="whitespace-nowrap flex flex-col" key={stat.id}>
        <strong className="text-brand-blue font-display text-[1.75rem] font-medium leading-[2.25rem] tracking-[-0.01em] md:text-[2.25rem] md:leading-[2.75rem]">
          {stat.value}
        </strong>
        <span className="text-body text-[1rem] leading-[1.6] md:text-[1.125rem]">{stat.label}</span>
      </li>
    ))}
  </ul>
));

GrowthStats.displayName = 'GrowthStats';

const CourseIllustration = memo(() => (
  <div
    className="relative block justify-center grow-0 shrink-0 basis-auto w-[621px] h-[552px] max-md:[zoom:calc(tan(atan2(100cqi,_621px)))] max-md:self-center md:max-xl:[zoom:calc(tan(atan2(50cqi_-_20px,_621px)))]"
    aria-hidden="true"
    inert
  >
    <div className="block absolute top-0 left-0 w-[373px]">
      <CourseCard
        variant="illustration"
        course={GROWTH_COURSE}
        ratingIcon={ICON_STAR_LIME}
        extraBadge={LEARNER_MORE_DARK}
      />
    </div>
    <img
      className="block w-[577px] h-[540px] absolute [filter:drop-shadow(rgba(0,_0,_0,_0.09)_3px_5px_5px)_drop-shadow(rgba(0,_0,_0,_0.16)_32px_46px_30px)] top-[12px] left-0 object-cover"
      src={HERO_STUDENT}
      alt=""
    />
    <div className="p-[16px] gap-[8px] rounded-[16px] flex absolute flex-col items-start [backdrop-filter:blur(10px)] top-[213px] left-[345px] bg-white">
      <p className="text-ink text-[0.875rem] font-medium leading-[24px]">Learning Progress</p>
      <p className="w-[200px] text-ink font-display text-[3rem] font-semibold leading-[1.2] tracking-[-0.01em]">
        {LEARNING_PROGRESS_LABEL}
      </p>
      <ProgressBar tone="soft" />
    </div>
    <OrnamentField ornaments={GROWTH_ORNAMENTS.course} />
  </div>
));

CourseIllustration.displayName = 'CourseIllustration';

const StatCardTitle = memo(({ label, detail }) => (
  <p className="whitespace-nowrap flex flex-col text-[1rem] font-medium leading-[1.2]">
    {label}
    <span className="text-[0.625rem] font-normal leading-[1.2]">{detail}</span>
  </p>
));

StatCardTitle.displayName = 'StatCardTitle';

const CreatorIllustration = memo(() => (
  <div
    className="relative block justify-center grow-0 shrink-0 basis-auto w-[541px] h-[596px] max-md:[zoom:calc(tan(atan2(100cqi,_541px)))] max-md:self-center md:max-xl:[zoom:calc(tan(atan2(50cqi_-_20px,_541px)))]"
    aria-hidden="true"
    inert
  >
    <div className="p-[16px] gap-[8px] rounded-[16px] flex absolute flex-col items-start [backdrop-filter:blur(10px)] left-0 bg-brand-blue text-canvas top-[44px]">
      <StatCardTitle label={REVENUE_LABEL} detail={REVENUE_RANGE} />
      <div className="flex items-center justify-between w-[200px]">
        <strong className="whitespace-nowrap font-display text-[1.5rem] font-semibold leading-[32px] tracking-[-0.01em]">
          {REVENUE_AMOUNT}
        </strong>
        <span className="whitespace-nowrap py-[2px] px-[8px] rounded-[24px] inline-flex bg-[rgb(203,_252,_1)] text-ink text-[0.625rem] font-medium leading-[20px]">
          {REVENUE_DELTA}
        </span>
      </div>
      <ProgressBar tone="light" />
    </div>
    <div className="p-[16px] gap-[8px] rounded-[16px] flex absolute flex-col items-start [backdrop-filter:blur(10px)] left-0 bg-brand-blue text-canvas top-[194px] w-[134px]">
      <StatCardTitle label={YEAR_TO_DATE_LABEL} detail={YEAR_TO_DATE_YEAR} />
      <strong className="whitespace-nowrap font-display text-[1.5rem] font-semibold leading-[32px] tracking-[-0.01em]">
        {YEAR_TO_DATE_AMOUNT}
      </strong>
      <span className="whitespace-nowrap py-[2px] px-[8px] rounded-[24px] inline-flex bg-[rgb(203,_252,_1)] text-ink text-[0.625rem] font-medium leading-[20px]">
        {REVENUE_DELTA}
      </span>
    </div>
    <div className="overflow-hidden absolute [filter:drop-shadow(rgba(0,_0,_0,_0.09)_3px_5px_5px)_drop-shadow(rgba(0,_0,_0,_0.16)_32px_46px_30px)] top-0 left-[28px] w-[435px] h-[596px]">
      <img
        className="block w-[157.01%] h-[114.6%] absolute top-0 left-[-28.51%] max-w-none"
        src={GROWTH_CREATOR}
        alt=""
      />
    </div>
    <div className="p-[16px] gap-[8px] rounded-[16px] flex absolute flex-col items-start [backdrop-filter:blur(10px)] top-[413px] left-[283px] w-[258px] justify-center bg-white">
      <div>
        <p className="text-ink text-[1rem] font-medium leading-[24px]">{HAPPY_STUDENTS_LABEL}</p>
        <p className="whitespace-pre flex items-center text-muted text-[0.625rem] leading-[1.5]">
          <strong className="text-ink font-bold">{`${HAPPY_STUDENTS_RATING} `}</strong>
          {HAPPY_STUDENTS_COUNT}
          <span className="relative w-[16px] h-[16px]">
            <img
              className="absolute top-[6.92%] left-[8.87%] w-[82.26%] h-[78.55%]"
              src={ICON_STAR}
              alt=""
            />
          </span>
        </p>
      </div>
      <AvatarStack
        variant="growth"
        avatars={HERO_AVATARS}
        extraLabel={HAPPY_STUDENTS_EXTRA}
        badgeSrc={AVATAR_MORE}
        size={HERO_AVATAR_SIZE}
      />
    </div>
    <OrnamentField ornaments={GROWTH_ORNAMENTS.creator} />
  </div>
));

CreatorIllustration.displayName = 'CreatorIllustration';

const CreatorBenefits = memo(() => (
  <ul className="gap-4 flex flex-col">
    {CREATOR_BENEFITS.map((benefit) => (
      <li
        className="gap-2 flex items-end text-ink text-[1rem] font-medium leading-[1.2] md:text-[1.125rem]"
        key={benefit}
      >
        <img src={ICON_CHECK} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        {benefit}
      </li>
    ))}
  </ul>
));

CreatorBenefits.displayName = 'CreatorBenefits';

export const GrowthSection = memo(() => (
  <section
    className="overflow-hidden py-16 relative bg-paper [-webkit-font-smoothing:antialiased] md:py-20 xl:py-30"
    aria-label="Professional growth"
  >
    <img
      className="absolute max-w-none pointer-events-none top-[-506px] left-[calc(50%_-_1268px)] w-[2536px] h-[2471px]"
      src={GROWTH_GLOW}
      alt=""
    />
    <img
      className="absolute max-w-none pointer-events-none top-[906px] left-[calc(50%_-_1047px)] w-[752px] h-[752px]"
      src={GROWTH_GLOW_LIME}
      alt=""
    />
    <div className="mx-auto gap-16 w-[min(100%_-_2rem,_75rem)] relative z-1 flex flex-col sm:w-[min(100%_-_2.5rem,_75rem)] md:gap-18 md:pl-[1px]">
      <div className="gap-8 flex flex-col items-stretch max-xl:[container-type:inline-size] md:gap-[40px] md:flex-row md:items-center xl:gap-[63px]">
        <div className="gap-6 flex flex-col items-start grow-0 shrink-0 basis-auto w-auto max-xl:min-w-0 md:gap-10 md:grow md:shrink md:basis-0 xl:grow-0 xl:shrink-0 xl:basis-auto xl:w-[574px]">
          <h2 className="font-display font-semibold tracking-[-0.01em] leading-[1.25] text-ink text-[clamp(1.5rem,_6.5vw,_1.75rem)] w-auto max-w-none md:leading-[1.2] md:text-[clamp(1.75rem,_3.2vw,_2.75rem)] xl:text-[2.75rem] xl:w-[577px]">
            {GROWTH_TITLE}
          </h2>
          <p className="text-body text-[1rem] font-normal leading-[1.6] w-auto max-xl:max-w-none md:text-[1.125rem] xl:w-[477px]">
            {GROWTH_BODY}
          </p>
          <GrowthStats />
        </div>
        <CourseIllustration />
      </div>
      <div className="gap-8 flex flex-col items-stretch max-xl:[container-type:inline-size] md:gap-[40px] md:flex-row md:items-center xl:gap-[79px]">
        <CreatorIllustration />
        <div className="gap-6 flex flex-col items-start grow-0 shrink-0 basis-auto w-auto max-xl:min-w-0 max-md:[order:-1] md:gap-10 md:grow md:shrink md:basis-0 xl:grow-0 xl:shrink-0 xl:basis-auto xl:w-[580px]">
          <h2 className="font-display font-semibold tracking-[-0.01em] leading-[1.25] text-ink text-[clamp(1.5rem,_6.5vw,_1.75rem)] w-auto max-xl:max-w-none md:leading-[1.2] md:text-[clamp(1.75rem,_3.2vw,_2.75rem)] xl:text-[2.75rem] xl:w-[391px]">
            {CREATOR_TITLE}
          </h2>
          <p className="text-body text-[1rem] font-normal leading-[1.6] w-auto max-xl:max-w-none md:text-[1.125rem] xl:w-[574px]">
            <strong className="text-ink font-bold">{CREATOR_LEAD}</strong> {CREATOR_BODY}
          </p>
          <CreatorBenefits />
        </div>
      </div>
    </div>
  </section>
));

GrowthSection.displayName = 'GrowthSection';
