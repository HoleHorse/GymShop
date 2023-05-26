export class Item {
  constructor(
    public _id: string,
    public title: string,
    public name: string,
    public imgs: string[],
    public price: number,
    public description: string,
    public availability: string,
    public rating: number,
    public reviews: number,
    public comments: number[],
    public details: string[],
    public sold: number
  ) {}
}

export class Comment {
  constructor(_id: string, author: string, comment: string) {}
}

export type ItemProp = {
  item: Item;
};
