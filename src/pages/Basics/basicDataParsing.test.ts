import parse from './basicDataParsing';

describe('basicDataParsing', () => {
  const now = new Date('2026-07-01');

  it('gets 0 years from empty work data', () => {
    expect(parse.getYearsExperience([], now)).toBe(0);
  });

  it('calculates years from a single start date', () => {
    expect(parse.getYearsExperience([{ startDate: '2024-06-19' }], now)).toBe(
      2,
    );
  });

  it('calculates years from a multiple work history', () => {
    expect(
      parse.getYearsExperience(
        [{ startDate: '2019-01-01' }, { startDate: '2024-06-19' }],
        now,
      ),
    ).toBe(7);
  });
});
