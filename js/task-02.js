const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createIngredients(ingredients) {
  const list = document.querySelector("#ingredients");

  const itemIngredients = ingredients.map((el) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = el;
    return item;
  });

  list.append(...itemIngredients);
}
createIngredients(ingredients);
