'use strict';

function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    return {
      D: D,
      roots: [],
    };
  } else if (D === 0) {
    let x1 = -b / (2 * a);

    return {
      D: D,
      roots: [x1],
    };
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);

    return {
      D: D,
      roots: [x1, x2],
    };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x\u00b2 + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  switch (result.roots.length) {
    case 0:
      console.log('Уравнение не имеет вещественных корней');
      break;
    case 1:
      console.log(`Уравнение имеет один корень. X\u2081 = ${result.roots[0]}`);
      break;
    default:
      console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`)
  }
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }

  let marksSum = 0;
  for (let mark of marks) {
    marksSum += mark;
  }

  return marksSum / marks.length;
}

function getAverageScore(data) {
  let result = {};
  let marksSum = 0;
  let subjectsQty = 0;
  for (let subject in data) {
    result[subject] = getAverageMark(data[subject]);
    marksSum += result[subject];
    subjectsQty++;
  }

  if (subjectsQty === 0) {
    result.average = 0;
  } else {
    result.average = marksSum / subjectsQty;
  }
  
  return result;
}

function getDecodedValue(secret) {
  switch (secret) {
    case 0:
      return 'Родриго';
    case 1:
      return 'Эмильо';
  }
}

function getPersonData(secretData) {
  let pirate = {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb),
  }
  return pirate;
}