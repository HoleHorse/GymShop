import ItemModel, { Item } from "../models/item";

export const GetItems = async (): Promise<[number, Item[]]> => {
  try {
    const items = await ItemModel.find();
    return [200, items];
  } catch (e) {
    return [500, []];
  }
};
