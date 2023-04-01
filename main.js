function method1() {
  // Income inputs
  const incomeSalary = document.getElementById('income-salary');
  const incomeFreelance = document.getElementById('income-freelance');
  const incomeExtra1 = document.getElementById('income-extra-1');
  const incomeExtra2 = document.getElementById('income-extra-2');

  // Cost inputs
  const costFlat = document.getElementById('cost-flat');
  const costHouseServices = document.getElementById('cost-house-services');
  const costTransport = document.getElementById('cost-transport');
  const costCredit = document.getElementById('cost-credit');

  // Total inputs
  const totalMonthInput = document.getElementById('total-month');
  const totalDayInput = document.getElementById('total-day');
  const totalYearInput = document.getElementById('total-year');

  let totalMonth, totalDay, totalYear;

  // Money box
  const moneyBoxRange = document.getElementById('money-box-range');
  const accumulationInput = document.getElementById('accumulation');
  const spendInput = document.getElementById('spend');

  let accumulation = 0;
  let totalPrecents = 0;

  const strToNum = (input) => (input.value ? parseInt(input.value) : 0);

  function countingAvailableMoney() {
    const totalIncomesPerMonth =
      strToNum(incomeSalary) +
      strToNum(incomeFreelance) +
      strToNum(incomeExtra1) +
      strToNum(incomeExtra2);

    const totalCostsPerMonth =
      strToNum(costFlat) +
      strToNum(costHouseServices) +
      strToNum(costTransport) +
      strToNum(costCredit);

    totalMonth = totalIncomesPerMonth - totalCostsPerMonth;
    totalMonthInput.value = totalMonth;
  }

  function calculationPrecents() {
    if (!totalMonth) totalMonth = 0;

    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spendInput.value = totalMonth - accumulation;

    totalDay = (spendInput.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
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

    totalPrecents = strToNum(event.target);
    totalPrecentsSpan.innerHTML = totalPrecents;

    calculationPrecents();
  });
}

method1();

function method2() {
  // Заметил такую особенность:
  // parseInt("") => NaN
  // +("") => 0
  // Поэтому можно написать без функции strToNum()

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

  let totalMonth, totalDay, totalYear;

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

    totalMonth = totalIncomesPerMonth - totalCostsPerMonth;
    totalMonthInput.value = totalMonth;
  }

  function calculationPrecents() {
    if (!totalMonth) totalMonth = 0;

    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spendInput.value = totalMonth - accumulation;

    totalDay = (spendInput.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
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
}

method2();
