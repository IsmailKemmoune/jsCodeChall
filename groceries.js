// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

// Examples:

// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// // returns 'Carrots, Hummus, Pesto and Rigatoni'

// groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// // returns 'Bread and Butter'

// groceries( [{item: 'Cheese Balls'}] );
// // returns 'Cheese Balls'

const groceries = (arr) => {
  let str = "";
  if (arr.length > 1) {
    arr.splice(arr.length - 1, 0, { item: "and" });
    let newArr = arr.map((item) => (item.item += ","));
    let andIndex = newArr.indexOf("and,");
    newArr[andIndex - 1] = newArr[andIndex - 1].replace(",", "");
    newArr[andIndex] = "and";
    newArr[andIndex + 1] = newArr[andIndex + 1].replace(",", "");
    str = newArr.join(" ");
  } else str = arr[0].item;
  return str;
};

console.log(
  groceries([
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
  ])
);
console.log(groceries([{ item: "Bread" }, { item: "Butter" }]));
console.log(groceries([{ item: "Cheese Balls" }]));
