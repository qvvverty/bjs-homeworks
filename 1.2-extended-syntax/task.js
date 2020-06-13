"use strict";

function getResult(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let x = [];

  if (D === 0) {
    x[0] = -b / (2 * a);
  } else if (D > 0) {
    x[0] = (-b + Math.sqrt(D)) / (2 * a);
    x[1] = (-b - Math.sqrt(D)) / (2 * a);
  }

  for (let i = 0; i < x.length; i++) {
    if (!Number.isInteger(x[i])) {
      x[i] = x[i].toFixed(3);
    }
  }

  return x;
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 5) {
    console.log('Оценок больше 5, средняя оценка будет рассчитана для первых 5 значений');
    marks.splice(5, marks.length - 5);
  }

  let markSum = 0;
  let mark;
  for (mark of marks) {
    markSum += mark;
  }
  let averageMark = Math.round(markSum / marks.length);

  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let date = new Date();
  let fullYears = date.getFullYear() - dateOfBirthday.getFullYear();
  let canDrink = `Не желаете ли олд-фэшн, ${name}?`;
  let cantDrink = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

  if (fullYears > 18) {
    return canDrink;
  } else if (fullYears === 18 && date.getMonth() - dateOfBirthday.getMonth() <= 0 && date.getDate() - dateOfBirthday.getDate() <= 0) {
    return canDrink;
  } else {
    return cantDrink;
  }
}
