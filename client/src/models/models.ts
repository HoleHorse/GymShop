export interface Item {
  id: number,
  title: string;
  img: string;
  price: number;
  details: {
    
  };
}

export interface ItemProp {
  item: Item;
}