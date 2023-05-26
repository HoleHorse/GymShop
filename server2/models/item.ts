import { Document, Schema, model } from "mongoose";

export interface Item extends Document {
  _id: string;
  title: string;
  name: string;
  imgs: string[];
  price: number;
  description: string;
  availability: string;
  rating: number;
  reviews: number;
  comments: string[];
  details: string[];
  sold: number;
}

const itemSchema = new Schema<Item>({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imgs: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  comments: {
    type: [String],
    required: true,
  },
  details: {
    type: [String],
    required: true,
  },
  sold: {
    type: Number,
    required: true,
  },
});

export default model<Item>("Item", itemSchema);
