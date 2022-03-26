const isTheDinnerVegan = (arr) => arr.every((x) => x.source === "plant");

const dinner = [
  { name: "hamburger", source: "plant" },
  { name: "cheese", source: "plant" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "da" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false
