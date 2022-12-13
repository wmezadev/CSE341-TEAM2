import bodyParser from 'body-parser';
import express, { Express, Router } from 'express';
import { BoardgameController, ReviewController } from '../controllers';
import {
  PostBoardGameRequest,
  PutBoardGameRequest,
  PostReviewRequest,
  PutReviewRequest
} from '../middlewares';

const boardgameRoutes: Router = express.Router();

boardgameRoutes.get('/boardgame', BoardgameController.index);
boardgameRoutes.post('/boardgame', PostBoardGameRequest, BoardgameController.store);
boardgameRoutes.put('/boardgame/:id', PutBoardGameRequest, BoardgameController.update);
boardgameRoutes.delete('/boardgame/:id', BoardgameController.destroy);
boardgameRoutes.get('/boardgame/:id', BoardgameController.show);

const reviewRoutes: Router = express.Router();

reviewRoutes.get('/review', ReviewController.index);
reviewRoutes.post('/review', PostReviewRequest, ReviewController.store);
reviewRoutes.put('/review/:id', PutReviewRequest, ReviewController.update);
reviewRoutes.delete('/review/:id', ReviewController.destroy);
reviewRoutes.get('/review/getByBoardgame/:boardgame_id', ReviewController.getByBoardgame);
reviewRoutes.get('/review/getByUser/:user_id', ReviewController.getByUser);

const router: Router = express.Router();
router.use(boardgameRoutes);
router.use(reviewRoutes);

export function createServer() {
  const app: Express = express();

  app
    .use(bodyParser.json())
    .use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    })
    .use('/', router);

  return app;
}
