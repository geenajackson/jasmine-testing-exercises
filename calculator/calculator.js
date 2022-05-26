window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let defaultValues = {
    amount: document.getElementById("loan-amount"),
    years: document.getElementById("loan-years"),
    rate: document.getElementById("loan-rate"),
  };
  defaultValues.amount.innerText = "10000";
  defaultValues.years.innerText = "2";
  defaultValues.rate.innerText = ".02";
  return calculateMonthlyPayment(defaultValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  return calculateMonthlyPayment(currentValues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let amount = values.amount;
  let interestRate = values.rate / 12;
  let payments = values.years * 12;
  let monthlyPayment = ((amount * interestRate) / (1 - Math.pow((1 + interestRate), -payments)));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
