import express, { Express, Request, Response } from 'express';
import config from './src/config/config';
import { ConnectDB } from './src/config/mongo';

const app: Express = express();
const PORT = config.server.port
const MONGO_URL = config.mongo.url


ConnectDB(MONGO_URL)


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/home', (req: Request, res: Response) => {
  res.send('<h1>Hello</h1>');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});