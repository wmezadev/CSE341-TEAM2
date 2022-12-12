import express, { Router } from 'express';
import { BoardgameController } from '../controllers';
import { PostBoardGameRequest, PutBoardGameRequest } from '../middlewares';

export const boardgameRoutes: Router = express.Router();

boardgameRoutes.get('/boardgame', BoardgameController.index);
boardgameRoutes.post('/boardgame', PostBoardGameRequest, BoardgameController.store);
boardgameRoutes.put('/boardgame/:id', PutBoardGameRequest, BoardgameController.update);
boardgameRoutes.delete('/boardgame/:id', BoardgameController.destroy);
boardgameRoutes.get('/boardgame/:id', BoardgameController.show);
