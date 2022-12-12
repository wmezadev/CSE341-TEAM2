import express, { Router } from 'express';
import { BoardgameController } from '../controllers';

import { githubOAuth } from '../middlewares/githubOAuth';

export const boardgameRoutes: Router = express.Router();

boardgameRoutes.get('/boardgame', BoardgameController.index);
boardgameRoutes.post('/boardgame', githubOAuth, BoardgameController.store);
boardgameRoutes.put('/boardgame/:id', githubOAuth, BoardgameController.update);
boardgameRoutes.delete('/boardgame/:id', githubOAuth, BoardgameController.destroy);
boardgameRoutes.get('/boardgame/:id', BoardgameController.show);
