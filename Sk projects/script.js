const drinkBtn = document.getElementById("drink-btn");
const counterElem = document.getElementById("counter");
const goalElem = document.getElementById("goal");
const setGoalBtn = document.getElementById("set-goal-btn");
const goalReachedPopup = document.getElementById("goal-reached-popup");
const goalReachedValue = document.getElementById("goal-reached-value");
const closePopupBtn = document.getElementById("close-popup-btn");
const bodyElem = document.querySelector("body");

let counter = 0;
let goal = parseInt(goalElem.value);

drinkBtn.addEventListener("click", () => {
  counter++;
  counterElem.innerText = counter;
  if (counter === goal) {
    goalReachedValue.innerText = goal;
    goalReachedPopup.style.display = "block";
    bodyElem.classList.add("goal-reached");
  }
});

setGoalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  goal = parseInt(goalElem.value);
  goalReachedPopup.style.display = "none";
  counter = 0;
  counterElem.innerText = counter;
  bodyElem.classList.remove("goal-reached");
});

closePopupBtn.addEventListener("click", () => {
  goalReachedPopup.style.display = "none";
  bodyElem.classList.remove("goal-reached");
});
