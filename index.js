//output
const displayYears = document.querySelector(".display-years");
const displayMonths = document.querySelector(".display-months");
const displayDays = document.querySelector(".display-days");
const buttonSelector = document.querySelector(".submit-button");

//input
const inputYearSelector = document.querySelector("#years");
const inputMonthSelector = document.querySelector("#months");
const inputDaySelector = document.querySelector("#days");

//Error states
const errorYearSelector = document.querySelector(".years-error");
const errorMonthSelector = document.querySelector(".months-error");
const errorDaySelector = document.querySelector(".days-error");

let valid = false;
console.log(errorDaySelector);

// Error conditions
inputDaySelector.addEventListener("input", (e) => {
  if (+inputDaySelector.value > 31) {
    errorDaySelector.textContent = "Must be a valid day";
    valid = false;
    return;
  } else {
    valid = true;
    errorDaySelector.textContent = "";
  }
  if (+inputDaySelector.value === 0) {
    valid = false;
    errorDaySelector.textContent = "This field is required";
    valid = false;
    return;
  } else {
    errorDaySelector.textContent = "";
  }
});

inputMonthSelector.addEventListener("input", (e) => {
  if (+inputMonthSelector.value > 12) {
    errorMonthSelector.textContent = "Must be a valid month";
    valid = false;
    return;
  } else {
    valid = true;
    errorDaySelector.textContent = "";
  }
  if (+inputMonthSelector.value === 0) {
    errorMonthSelector.textContent = "This field is required";
    valid = false;
    return;
  } else {
    errorMonthSelector.textContent = "";
  }
});

inputYearSelector.addEventListener("input", (e) => {
  if (+inputYearSelector.value > 2023) {
    errorYearSelector.textContent = "Must be in the past";
    valid = false;
    return;
  } else {
    valid = true;
    errorYearSelector.textContent = "";
  }
  if (+inputYearSelector.value === 0) {
    errorYearSelector.textContent = "This field is required";
    valid = false;
    return;
  } else {
    errorYearSelector.textContent = "";
  }
});

// Calcualte age

buttonSelector.addEventListener("click", ageCalcualtor);
function ageCalcualtor() {
  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  if (valid === false) {
    alert("Error, please fill out the required fields");
  } else {
    let birthDate = `${inputMonthSelector.value}/${inputDaySelector.value}/${inputYearSelector.value}`;
    let bDate = new Date(birthDate);
    console.log(bDate);
    let age = Date.now() - bDate; // value is in milliseconds
    console.log(age);
    let ageObj = new Date(age);
    let ageYears = ageObj.getUTCFullYear() - 1970;
    let ageMonths = ageObj.getUTCMonth();
    let ageDays = ageObj.getUTCDay();

    displayDays.innerHTML = ageDays;
    displayMonths.innerHTML = ageMonths;
    displayYears.innerHTML = ageYears;
  }
}
