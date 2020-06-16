"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return 'Параметр "процентная ставка" пуст или содержит нечисловое значение';
  } else if (isNaN(contribution)) {
    return 'Параметр "cумма первоначального взноса" пуст или содержит нечисловое значение';
  } else if (isNaN(amount)) {
    return 'Параметр "сумма кредита" пуст или содержит нечисловое значение';
  }

  let loanBody = amount - contribution;
  let currentDate = new Date;
  let months = (date.getFullYear() - currentDate.getFullYear()) * 12 + date.getMonth() - currentDate.getMonth();
  let interestRate = percent / 100 / 12;
  let monthlyPayment = loanBody * (interestRate + interestRate / (Math.pow(1 + interestRate, months) - 1));
  let totalAmount = Number((monthlyPayment * months).toFixed(2));

  console.log(totalAmount);
  return totalAmount;
}

function getGreeting(name) {
  if (!name) {
    name = 'Аноним';
  }

  let greeting = `Привет, мир! Меня зовут ${name}`;

  console.log(greeting);
  return greeting;
}
