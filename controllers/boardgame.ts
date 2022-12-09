import { Boardgame } from '../models';
import { Request, Response } from 'express';

const index = async (req: Request, res: Response) => {
  try {
    const boardgame = await Boardgame.find({});
    return res.status(200).json(boardgame);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const store = async (req: Request, res: Response) => {
  try {
    const {
      title,
      slug,
      number_of_players,
      published_date,
      categories,
      rating,
      designer,
      publisher
    } = req.body;
    const post = new Boardgame({
      title,
      slug,
      number_of_players,
      published_date,
      categories,
      rating,
      designer,
      publisher,
      created: new Date(),
      updated: new Date()
    });
    await post.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const BoardgameController = { index, store };
