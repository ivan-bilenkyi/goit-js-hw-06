const numbersCategories =
  document.querySelector("#categories").childElementCount;
console.dir(`Number of categories: ${numbersCategories}`);

const category = document.querySelectorAll(".item");
category.forEach((item) => {
  console.dir(`Category: ${item.firstElementChild.textContent}`);
  console.dir(`Elements: ${item.lastElementChild.childElementCount}`);
});
