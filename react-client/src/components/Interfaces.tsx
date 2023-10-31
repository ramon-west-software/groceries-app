export interface Item {
    itemId: number;
    name: string;
    purchaseDate: string;
    duration: number;
  }

export interface Category {
    categoryId: number;
    name: string;
    items: Item[];
}

export interface StorageArea {
    storageId: number;
    name: string;
    categories: Category[];
}  

export interface UserData {
    userId: number;
    name: string;
    storageAreas: StorageArea[];
}
