export interface Item {
    name: string;
    purchaseDate: string;
    daysLeft: number;
  }

export interface Category {
    name: string;
    items: Item[];
}

export interface FoodLocation {
    name: string;
    categories: Category[];
}  

export interface Locations {
    locations: FoodLocation[];
}
