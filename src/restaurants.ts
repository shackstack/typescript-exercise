interface RestaurantInfo {
  category: string;
  name: string;
  distance: number;
  menu: string;
}

class Restaurant {
  #restaurants: RestaurantInfo[];

  constructor() {
    this.#restaurants = [];
  }

  add(info: RestaurantInfo): void {}

  filterByCategory(category: string): RestaurantInfo[] {}
}
