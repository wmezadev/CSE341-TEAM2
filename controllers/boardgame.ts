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

const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await Boardgame.findOne({ _id: id });
    if (!post) {
      throw new Error('Boardgame not found');
    }
    return res.status(200).json(post);
  } catch (err: any) {
    return res.status(404).json(err.Error);
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

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
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
    const resp = await Boardgame.updateOne(
      { _id: id },
      { title, slug, number_of_players, published_date, categories, rating, designer, publisher }
    );
    if (!resp.acknowledged) {
      throw new Error(`There is no boardgame for ID: ${id}`);
    }
    return res.status(201).json(resp);
  } catch (err: any) {
    return res.status(500).json(err.Error);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await Boardgame.findByIdAndRemove(id);
    if (!resp) {
      throw new Error('Boardgame not found');
    }
    return res.status(204).send();
  } catch (err: any) {
    return res.status(404).json(err.Error);
  }
};

export const BoardgameController = { index, show, store, update, destroy };
