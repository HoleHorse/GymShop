export interface Model {}

export class Item {
  constructor(
    public id: number,
    public title: string,
    public imgs: string[],
    public price: number,
    public rating: number,
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
