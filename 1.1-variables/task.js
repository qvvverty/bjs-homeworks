function averageMark(a, g, p) {
  let algebra = a;
  let geography = g;
  let physics = p;
  let avgMark = Math.round((algebra + geography + physics) / 3);

  return avgMark;
}

function sayHello(userName) {
  let myName = userName;
  let message = `Привет, мир! Меня зовут ${myName}`;

  return message;
}

function calculateFormula() {
  let x = 2;
  let y = 22;
  let z = 0;
  let result = x * y + 5 * z + x - 1;

  return result;
}
