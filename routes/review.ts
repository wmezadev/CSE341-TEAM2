import express, { Router } from 'express';
import { ReviewController } from '../controllers';
import { PostReviewRequest, PutReviewRequest, githubOAuth } from '../middlewares';

export const reviewRoutes: Router = express.Router();

reviewRoutes.get('/review', ReviewController.index);
reviewRoutes.post('/review', githubOAuth, PostReviewRequest, ReviewController.store);
reviewRoutes.put('/review/:id', githubOAuth, PutReviewRequest, ReviewController.update);
reviewRoutes.delete('/review/:id', githubOAuth, ReviewController.destroy);
reviewRoutes.get('/review/getByBoardgame/:boardgame_id', ReviewController.getByBoardgame);
reviewRoutes.get('/review/getByUser/:user_id', ReviewController.getByUser);
