import { Schema, model } from 'mongoose';

export interface Ireview {
  boardgame_id: string;
  user_id: string;
  rating: number;
  content: string;
  created: Date;
  updated: Date;
}

const schema = new Schema<Ireview>({
  boardgame_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

export const Review = model<Ireview>('review', schema);
