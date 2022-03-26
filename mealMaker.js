const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    get amd() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
  },
  get appetizers() {},
  set appetizers(appetizer) {},
  get mains() {},
  set mains(main) {},
  get desserts() {},
  set desserts(dessert) {},
  get courses() {},
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const { price: appetizerPrice, name: appetizerName } =
      this.getRandomDishFromCourse("appetizers");
    const { price: mainPrice, name: mainName } =
      this.getRandomDishFromCourse("mains");
    const { price: dessertPrice, name: dessertName } =
      this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizerPrice + mainPrice + dessertPrice;

    return `You ordered ${appetizerName} as an appetizer, ${mainName} as a main, and ${dessertName} as a dessert --- Total price: ${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "pizza sghira", 15);
menu.addDishToCourse("appetizers", "l3des", 10);
menu.addDishToCourse("mains", "djaj o roz", 35);
menu.addDishToCourse("mains", "rfissa", 45);
menu.addDishToCourse("mains", "couscous", 40);
menu.addDishToCourse("desserts", "banana", 1);
menu.addDishToCourse("desserts", "danone", 2);

console.log(menu.generateRandomMeal());
