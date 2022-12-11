import express, { Router } from 'express';
import { ReviewController } from '../controllers';

export const reviewRoutes: Router = express.Router();

reviewRoutes.get('/review', ReviewController.index);
reviewRoutes.post('/review', ReviewController.store);
reviewRoutes.put('/review/:id', ReviewController.update);
reviewRoutes.delete('/review/:id', ReviewController.destroy);
reviewRoutes.get('/review/getByBoardgame/:boardgame_id', ReviewController.getByBoardgame);
reviewRoutes.get('/review/getByUser/:user_id', ReviewController.getByUser);
