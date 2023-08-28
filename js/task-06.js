const input = document.querySelector("input");
const inputDate = document.querySelector('[data-length="6"]');

input.addEventListener("blur", changeName);

function changeName(event) {
  const inputLength = input.value.trim().length;
  const dataSEtNum = Number(inputDate.dataset.length);
  if (inputLength !== dataSEtNum && inputLength > 0) {
    input.classList.add("invalid");
  } else if (inputLength === dataSEtNum) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
