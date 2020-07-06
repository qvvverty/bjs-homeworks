'use strict';

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Один или оба аргумента функции не являются массивами.')
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  if (arr1.every((value, index) => value === arr2[index])) {
    return true;
  } else {
    return false;
  }
}

function memorize(fn, limit) {
  const memory = [];
  return function(...args) {
    let found = memory.find(item => compareArrays(args, item.args));
    if (found) {
      return found.result;
    }

    let result = fn(...args);
    memory.unshift({args, result});

    if (memory.length > limit) {
      memory.pop();
    }

    return result;
  };
}

// testCase

function testCase(fn, timerName) {
  const args = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(timerName);
  for (let i = 0; i < 25; i++) {
    args.forEach(item => fn(...item));
  }
  console.timeEnd(timerName);
}

// Тестирование показало что оригинальная функция sum при пяти вычислениях в 25 итерациях
// выполняется за 12.624 секунды.
// При таких же условиях оптимизированная memorize функция выполняется в среднем за 180 мс
// (при большем разбросе -- от 130 до 450 мс).
// При отключения таймера задержки оригинальная функция sum проходит тест в среднем
// за 80 мс.