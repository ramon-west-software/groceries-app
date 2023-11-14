export interface Item {
    id: number;
    name: string;
    purchaseDate: string;
    duration: number;
  }

export interface Category {
    id: number;
    name: string;
    items: Item[];
}

export interface StorageArea {
    id: number;
    name: string;
    categories: Category[];
}  

export interface UserData {
    id: number;
    name: string;
    storageAreas: StorageArea[];
}
