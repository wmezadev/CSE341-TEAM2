import express, { Router } from 'express';
import { BoardgameController } from '../controllers';

export const boardgameRoutes: Router = express.Router();

boardgameRoutes.get('/boardgame', BoardgameController.index);
boardgameRoutes.post('/boardgame', BoardgameController.store);
