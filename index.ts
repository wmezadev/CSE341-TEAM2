import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import { APP_HOST, APP_HTTP_SCHEMA, APP_PORT, MONGODB_URI } from './config';
import mongoose from 'mongoose';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Go to <a href="/api-docs">/api-docs</a>');
});

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', router);

mongoose.connect(MONGODB_URI, {}, () => {
  app.listen(APP_PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
    console.log('Connected to mongodb');
  });
});
