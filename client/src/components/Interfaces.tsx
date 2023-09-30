export interface Item {
    type: string;
    name: string;
    purchaseDate: string;
    daysLeft: number;
  }

export interface ItemType {
    type: string;
    items: Item[];
}

export interface Section {
    sectionName: string;
    itemTypes: ItemType[];
}  
