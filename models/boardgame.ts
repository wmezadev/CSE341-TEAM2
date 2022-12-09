import { Schema, model } from 'mongoose';

export interface Iboardgame {
  title: string;
  slug: string;
  number_of_players: number;
  published_date: number;
  categories: Array<string>;
  rating: number;
  designer: string;
  publisher: string;
  created: Date;
  updated: Date;
}

const schema = new Schema<Iboardgame>({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  number_of_players: {
    type: Number,
    required: true
  },
  published_date: {
    type: Number,
    required: true
  },
  categories: [String],
  rating: {
    type: Number,
    required: true
  },
  designer: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

export const Boardgame = model<Iboardgame>('boardgame', schema);
