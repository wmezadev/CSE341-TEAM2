import express, { Router } from 'express';
import { BoardgameController } from '../controllers';

export const boardgameRoutes: Router = express.Router();

boardgameRoutes.get('/boardgame', BoardgameController.index);
boardgameRoutes.post('/boardgame', BoardgameController.store);
boardgameRoutes.put('/boardgame/:id', BoardgameController.update);
boardgameRoutes.delete('/boardgame/:id', BoardgameController.destroy);
boardgameRoutes.get('/boardgame/:id', BoardgameController.show);
