import { NextFunction, Request, Response } from 'express';
import Validator from 'validatorjs';

export const PostBoardGameRequest = (req: Request, res: Response, next: NextFunction) => {
  const validation = new Validator(req.body, {
    title: 'required|string|min:3|max:255',
    slug: 'required|alpha_dash|min:3|max:255',
    number_of_players: 'required|number|max:8|min:1',
    published_date: 'required|date',
    categories: 'array',
    rating: 'required|number|max:3',
    designer: 'required|string',
    publisher: 'required|alpha|max:100'
  });

  if (validation.fails()) {
    return res.status(400).send({
      message: 'Please fix errors and rerun',
      errors: validation.errors.errors
    });
  }

  next();
};

export const PutBoardGameRequest = (req: Request, res: Response, next: NextFunction) => {
  const validation = new Validator(req.body, {
    boardgame_id: 'string|max:24',
    title: 'required|string|min:3|max:255',
    slug: 'required|alpha_dash|min:3|max:255',
    number_of_players: 'required|number|max:8|min:1',
    published_date: 'required|date',
    categories: 'array',
    rating: 'required|number|max:3',
    designer: 'required|string',
    publisher: 'required|alpha|max:100'
  });

  if (validation.fails()) {
    return res.status(400).send({
      message: 'Please fix errors and rerun',
      errors: validation.errors.errors
    });
  }

  next();
};

export const PostReviewRequest = (req: Request, res: Response, next: NextFunction) => {
  const validation = new Validator(req.body, {
    boardgame_id: 'required|string|max:24',
    published_date: 'required|date',
    author: 'required|alpha_dash|max:100',
    rating: 'required|number',
    content: 'required|max:255'
  });

  if (validation.fails()) {
    return res.status(400).send({
      message: 'Please fix errors and rerun',
      errors: validation.errors.errors
    });
  }

  next();
};

export const PutReviewRequest = (req: Request, res: Response, next: NextFunction) => {
  const validation = new Validator(req.body, {
    rating: 'required|number',
    content: 'required|max:255'
  });

  if (validation.fails()) {
    return res.status(400).send({
      message: 'Please fix errors and rerun',
      errors: validation.errors.errors
    });
  }

  next();
};

export const PostLoginRegRequest = (req: Request, res: Response, next: NextFunction) => {
  const validation = new Validator(req.body, {
    username: 'required|string|min:3|username_available',
    password: 'required|string|min:6|confirmed|strict|max:20'
  });

  if (validation.fails()) {
    return res.status(400).send({
      message: 'Please fix errors and rerun',
      errors: validation.errors.errors
    });
  }

  next();
};
