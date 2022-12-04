import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { router } from './routes';
import { APP_HOST, APP_HTTP_SCHEMA, APP_PORT } from './config';

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript');
});

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', router);

app.listen(APP_PORT, () => {
  console.log(`[server]: Server is running at ${APP_HTTP_SCHEMA}://${APP_HOST}:${APP_PORT}`);
});
