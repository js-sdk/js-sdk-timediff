# js-sdk-timediff

Simple timediff utilities. This library has no notion of time zone.

## library

```ts
$ TimeDiff(timestamp : Number) -> TimeDiff

// Holds the value and provide some utilities.


$ TimeDiff::of(milliseconds : Number) -> TimeDiff

// Smart contructor


$ TimeDiff.valueOf() -> Number

// Treat as a number so we can use the basic operation like '+'...


$ TimeDiff.concat(b : TimeDiff) -> TimeDiff

// Implements semigroup for TimeDiff.


$ TimeDiff.toDate() -> Date

// Returns a 'Date' from now.


$ timeDiff(t2 : Date, t1 : Date) -> TimeDiff

// Returns the diff of 2 'Date's.


$ timeDiffFromNow(t : Date) -> TimeDiff

// Returns the diff from now.


$ asSeconds(tdiff : TimeDiff) -> Number

// Returns the number of seconds of a 'TimeDiff'.


$ asMinutes(tdiff : TimeDiff) -> Number

// Returns the number of minutes of a 'TimeDiff'.


$ asHours(tdiff : TimeDiff) -> Number

// Returns the number of hours of a 'TimeDiff'.


$ asDays(tdiff : TimeDiff) -> Number

// Returns the number of days of a 'TimeDiff'.


$ asMonths(tdiff : TimeDiff) -> Number

// Returns the number of months (speculative) of a 'TimeDiff'.


$ asYears(tdiff : TimeDiff) -> Number

// Returns the number of years (no precise) of a 'TimeDiff'.


$ asComponents(tdiff : TimeDiff) -> { days: Number,
                                      hours: Number,
                                      minutes: Number,
                                      seconds: Number }

// Returns an object with all components (does not include year and month).
```

## license

See `license.md` or visit [Unlicense](http://unlicense.org).
