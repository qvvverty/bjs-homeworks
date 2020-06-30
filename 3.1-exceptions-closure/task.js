'use strict';

function parseCount(input) {
  let parsed = Number.parseInt(input);
  if (parsed) {
    return parsed;
  } else {
    throw new Error('Невалидное значение');
  }
}

function validateCount(input) {
  try {
    return parseCount(input);
  } catch(error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Треугольник с такими сторонами не существует');
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = (this.a + this.b + this.c) / 2;
    return +((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      getArea() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}