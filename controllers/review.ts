import { Review } from '../models';
import { Request, Response } from 'express';

const index = async (req: Request, res: Response) => {
  try {
    const review = await Review.find({});
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const store = async (req: Request, res: Response) => {
  try {
    const { boardgame_id, user_id, rating, content } = req.body;
    const post = new Review({
      boardgame_id,
      user_id,
      rating,
      content,
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
    const { boardgame_id, user_id, rating, content } = req.body;
    const resp = await Review.updateOne(
      { _id: id },
      { boardgame_id, user_id, rating, content, updated: new Date() }
    );
    if (!resp.acknowledged) {
      throw new Error(`There is no review for ID: ${id}`);
    }
    return res.status(201).json(resp);
  } catch (err: any) {
    return res.status(500).json(err.Error);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await Review.findByIdAndRemove(id);
    if (!resp) {
      throw new Error('Review not found');
    }
    return res.status(204).send();
  } catch (err: any) {
    return res.status(404).json(err.Error);
  }
};

const getByBoardgame = async (req: Request, res: Response) => {
  try {
    const { boardgame_id } = req.params;
    const review = await Review.find({ boardgame_id });
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getByUser = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const review = await Review.find({ user_id });
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const ReviewController = { index, store, update, destroy, getByBoardgame, getByUser };
