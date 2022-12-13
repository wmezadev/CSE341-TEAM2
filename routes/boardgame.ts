import express, { Router } from 'express';
import { BoardgameController } from '../controllers';
import { PostBoardGameRequest, PutBoardGameRequest, githubOAuth } from '../middlewares';

export const boardgameRoutes: Router = express.Router();

boardgameRoutes.get('/boardgame', BoardgameController.index);
boardgameRoutes.post('/boardgame', githubOAuth, PostBoardGameRequest, BoardgameController.store);
boardgameRoutes.put('/boardgame/:id', githubOAuth, PutBoardGameRequest, BoardgameController.update);
boardgameRoutes.delete('/boardgame/:id', githubOAuth, BoardgameController.destroy);
boardgameRoutes.get('/boardgame/:id', BoardgameController.show);
