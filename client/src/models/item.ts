export class Item {
  constructor(
    public id: number,
    public title: string,
    public name: string,
    public imgs: string[],
    public price: number,
    public description: string,
    public availability: string,
    public rating: number,
    public reviews: number,
    public comments: number[],
    public details: string[]
  ) {}
}

export class Comment {
  constructor(id: number, author: string, comment: string) {}
}

export type ItemProp = {
  item: Item;
};
