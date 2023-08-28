const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

decrement.addEventListener("click", () => {
  return (value.innerHTML = counterValue -= 1);
});

increment.addEventListener("click", () => {
  return (value.innerHTML = counterValue += 1);
});
