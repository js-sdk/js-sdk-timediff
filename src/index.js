const MILLISECONDS = 1;
const SECONDS = 1e3 * MILLISECONDS;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;
const MONTHS = 31 * HOURS;
const YEARS = 365 * DAYS;

function TimeDiff(milliseconds) {
  this.value = milliseconds;
}

TimeDiff.of = milliseconds =>
  new TimeDiff(milliseconds);

TimeDiff.prototype.valueOf = function() {
  return this.value;
};

TimeDiff.prototype.add = function(b) {
  return TimeDiff.of(this + b);
};

TimeDiff.prototype.concat = function(b) {
  return this.add(b);
};

TimeDiff.prototype.toDate = function() {
  return new Date(this.value);
};

export const timeDiff = (t2, t1) => TimeDiff.of(t2 - t1);

export const timeDiffFromNow = t => timeDiff(new Date(), t);

export const asSeconds = tdiff => tdiff / SECONDS;

export const asMinutes = tdiff => tdiff / MINUTES;

export const asHours = tdiff => tdiff / HOURS;

export const asDays = tdiff => tdiff / DAYS;

export const asMonths = tdiff => Math.round(asDays(tdiff) * 4800 / 146097);

export const asYears = tdiff => tdiff / YEARS;

export const asComponents = tdiff => {
  let time = tdiff;

  const days = time >= DAYS ? Math.round(time / DAYS) : 0;
  time = time - (days * DAYS);

  const hours = time >= HOURS ? Math.round(time / HOURS) : 0;
  time = time - (hours * HOURS);

  const minutes = time >= MINUTES ? Math.round(time / MINUTES) : 0;
  time = time - (minutes * MINUTES);

  const seconds = Math.round(time / SECONDS) || 0;

  return {
    days,
    hours,
    minutes,
    seconds
  };
};

export default TimeDiff;
