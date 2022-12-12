import express, { Router } from 'express';
import { ReviewController } from '../controllers';
import { githubOAuth } from '../middlewares/githubOAuth';

export const reviewRoutes: Router = express.Router();

reviewRoutes.get('/review', ReviewController.index);
reviewRoutes.post('/review', githubOAuth, ReviewController.store);
reviewRoutes.put('/review/:id', githubOAuth, ReviewController.update);
reviewRoutes.delete('/review/:id', githubOAuth, ReviewController.destroy);
reviewRoutes.get('/review/getByBoardgame/:boardgame_id', ReviewController.getByBoardgame);
reviewRoutes.get('/review/getByUser/:user_id', ReviewController.getByUser);
