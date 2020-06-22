'use strict';

String.prototype.isPalindrome = function() {
  if (this === '') {
    return false;
  }

  let input = this.toLowerCase().replace(/ /g, '');

  for (let i = 0; i < input.length / 2; i++) {
    if (input.substr(i, 1) !== input.substr(-i - 1, 1)) {
      return false;
    }
  }

  return true;
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }

  let marksSum = 0;
  for (let mark of marks) {
    marksSum += mark;
  }

  return Math.round(marksSum / marks.length);
}

function checkBirthday(birthday) {
  let now = new Date();
  birthday = Date.parse(birthday);

  const msInYear = 1000 * 60 * 60 * 24 * 365;
  let daysToAdd = Math.ceil((now - birthday) / msInYear / 4);
  let fullYears = (now - (daysToAdd * 1000 * 60 * 60 * 24 + birthday)) / msInYear;

  if (!isNaN(birthday) && fullYears >= 18) {
    return true;
  }

  return false;
}