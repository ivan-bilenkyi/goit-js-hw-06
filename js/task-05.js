const inputText = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
inputText.addEventListener("input", changeName);

function changeName(event) {
  const inputValue = event.currentTarget.value.trim();

  name.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
