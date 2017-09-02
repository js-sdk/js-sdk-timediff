/* global describe, it, setTimeout */

import TimeDiff, {
  timeDiff, timeDiffFromNow
} from '../src/index';
import * as TD from '../src/index';

describe("TimeDiff", () => {
  describe("timeDiff(b, a)", () => {
    it("should be 1 hour in milliseconds.", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 1, 1, 0, 0);
      timeDiff(B, A).value.should.be.eql(3600000);
    });
  });

  describe("timeDiffFromNow(a)", () => {
    it("should be greater than 0.", done => {
      const A = new Date();
      setTimeout(() => {
        (timeDiffFromNow(A) > 0).should.be.ok();
        done();
      }, 10);
    });
  });

  describe("concat(b)", () => {
    it("should concat two time diffs.", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 2, 0, 0, 0);
      const C = new Date(2017, 1, 3, 0, 0, 0);
      const BA = timeDiff(B, A);
      const CA = timeDiff(C, A);
      TD.asDays(BA.concat(CA)).should.be.eql(3);
    });
  });

  describe("units", () => {
    it("asSeconds().", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 1, 0, 0, 1);
      TD.asSeconds(timeDiff(B, A)).should.be.eql(1);
    });

    it("asMinutes().", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 1, 0, 1, 0);
      TD.asMinutes(timeDiff(B, A)).should.be.eql(1);
    });

    it("asHours().", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 1, 1, 0, 0);
      TD.asHours(timeDiff(B, A)).should.be.eql(1);
    });

    it("asDays().", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 2, 0, 0, 0);
      TD.asDays(timeDiff(B, A)).should.be.eql(1);
    });

    it("asMonths().", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 2, 1, 0, 0, 0);
      TD.asMonths(timeDiff(B, A)).should.be.eql(1);
    });

    it("asYears().", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2018, 1, 1, 0, 0, 0);
      TD.asYears(timeDiff(B, A)).should.be.eql(1);
    });
  });

  describe("components", () => {
    it("one day.", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 2, 0, 0, 0);
      TD.asComponents(timeDiff(B, A)).should.be.eql({
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    });

    it("one hour.", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 1, 1, 0, 0);
      TD.asComponents(timeDiff(B, A)).should.be.eql({
        days: 0,
        hours: 1,
        minutes: 0,
        seconds: 0
      });
    });

    it("one minute.", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 1, 0, 1, 0);
      TD.asComponents(timeDiff(B, A)).should.be.eql({
        days: 0,
        hours: 0,
        minutes: 1,
        seconds: 0
      });
    });

    it("one second.", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 1, 0, 0, 1);
      TD.asComponents(timeDiff(B, A)).should.be.eql({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 1
      });
    });

    it("all components.", () => {
      const A = new Date(2017, 1, 1, 0, 0, 0);
      const B = new Date(2017, 1, 2, 1, 1, 1);
      TD.asComponents(timeDiff(B, A)).should.be.eql({
        days: 1,
        hours: 1,
        minutes: 1,
        seconds: 1
      });
    });
  });
});
