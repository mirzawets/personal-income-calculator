const incomeSalary = document.getElementById('income-salary');
const incomeFreelance = document.getElementById('income-freelance');
const incomeExtra1 = document.getElementById('income-extra-1');
const incomeExtra2 = document.getElementById('income-extra-2');

const costFlat = document.getElementById('cost-flat');
const costHouseServices = document.getElementById('cost-house-services');
const costTransport = document.getElementById('cost-transport');
const costCredit = document.getElementById('cost-credit');

const totalMonthInput = document.getElementById('total-month');
const totalDayInput = document.getElementById('total-day');
const totalYearInput = document.getElementById('total-year');

let totalMonth = 0;
let totalDay = 0;
let totalYear = 0;

const moneyBoxRange = document.getElementById('money-box-range');
const accumulationInput = document.getElementById('accumulation');
const spendInput = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

function countingAvailableMoney() {
  const totalIncomesPerMonth =
    +incomeSalary.value + +incomeFreelance.value + +incomeExtra1.value + +incomeExtra2.value;

  const totalCostsPerMonth =
    +costFlat.value + +costHouseServices.value + +costTransport.value + +costCredit.value;

  totalMonth = parseFloat((totalIncomesPerMonth - totalCostsPerMonth).toFixed(2));
  totalMonthInput.value = totalMonth;
}

function calculationPrecents() {
  accumulation = parseFloat(((totalMonth * totalPrecents) / 100).toFixed(2));
  accumulationInput.value = accumulation;

  spendInput.value = parseFloat((totalMonth - accumulation).toFixed(2));

  totalDay = parseFloat((spendInput.value / 30).toFixed(2));
  totalDayInput.value = totalDay;

  totalYear = parseFloat((accumulation * 12).toFixed(2));
  totalYearInput.value = totalYear;
}

const inputs = document.querySelectorAll('.input');
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    countingAvailableMoney();
    calculationPrecents();
  });
});

moneyBoxRange.addEventListener('input', (event) => {
  const totalPrecentsSpan = document.getElementById('total-precents');

  totalPrecents = +event.target.value;
  totalPrecentsSpan.innerHTML = totalPrecents;

  calculationPrecents();
});
