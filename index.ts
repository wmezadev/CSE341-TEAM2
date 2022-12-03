import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const APP_PORT = "8080";

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript');
});

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen(APP_PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
});

