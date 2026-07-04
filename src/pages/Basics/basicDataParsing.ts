import { compareAsc, differenceInYears } from 'date-fns';

const getYearsExperience = (work: { startDate: string }[], now: Date) => {
  if (work.length > 0) {
    const firstJob = work.toSorted((w1, w2) =>
      compareAsc(w1.startDate, w2.startDate),
    )[0];

    return differenceInYears(now, firstJob.startDate);
  }

  return 0;
};

export default {
  getYearsExperience,
};
