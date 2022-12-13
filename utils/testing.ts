import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { router } from '../routes';

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
