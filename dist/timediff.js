(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MILLISECONDS = 1;
  var SECONDS = 1e3 * MILLISECONDS;
  var MINUTES = 60 * SECONDS;
  var HOURS = 60 * MINUTES;
  var DAYS = 24 * HOURS;
  var MONTHS = 31 * HOURS;
  var YEARS = 365 * DAYS;

  function TimeDiff(milliseconds) {
    this.value = milliseconds;
  }

  TimeDiff.of = function (milliseconds) {
    return new TimeDiff(milliseconds);
  };

  TimeDiff.prototype.valueOf = function () {
    return this.value;
  };

  TimeDiff.prototype.add = function (b) {
    return TimeDiff.of(this + b);
  };

  TimeDiff.prototype.concat = function (b) {
    return this.add(b);
  };

  TimeDiff.prototype.toDate = function () {
    return new Date(this.value);
  };

  var timeDiff = exports.timeDiff = function timeDiff(t2, t1) {
    return TimeDiff.of(t2 - t1);
  };

  var timeDiffFromNow = exports.timeDiffFromNow = function timeDiffFromNow(t) {
    return timeDiff(new Date(), t);
  };

  var asSeconds = exports.asSeconds = function asSeconds(tdiff) {
    return tdiff / SECONDS;
  };

  var asMinutes = exports.asMinutes = function asMinutes(tdiff) {
    return tdiff / MINUTES;
  };

  var asHours = exports.asHours = function asHours(tdiff) {
    return tdiff / HOURS;
  };

  var asDays = exports.asDays = function asDays(tdiff) {
    return tdiff / DAYS;
  };

  var asMonths = exports.asMonths = function asMonths(tdiff) {
    return Math.round(asDays(tdiff) * 4800 / 146097);
  };

  var asYears = exports.asYears = function asYears(tdiff) {
    return tdiff / YEARS;
  };

  var asComponents = exports.asComponents = function asComponents(tdiff) {
    var time = tdiff;

    var days = time >= DAYS ? Math.round(time / DAYS) : 0;
    time = time - days * DAYS;

    var hours = time >= HOURS ? Math.round(time / HOURS) : 0;
    time = time - hours * HOURS;

    var minutes = time >= MINUTES ? Math.round(time / MINUTES) : 0;
    time = time - minutes * MINUTES;

    var seconds = Math.round(time / SECONDS) || 0;

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  exports.default = TimeDiff;
});
