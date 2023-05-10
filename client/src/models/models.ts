export interface Model {
}

export class Item implements Model {
  id: number;
  title: string;
  img: string;
  price: number;
  details: Details;
  constructor(id: number, title: string, img: string, price: number, details: Details) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.price = price;
    this.details = details;
  }
}

export type Details = {

}

export type ItemProp = {
  item: Item;
}