import express, { Express, Request, Response } from "express";
import config from "./src/config/config";
import { ConnectDB } from "./src/config/mongo";
import router from "./src/routes";
import bodyParser from 'body-parser';
import cors from 'cors'

const app: Express = express();

const PORT = config.server.port;
const MONGO_URL = config.mongo.url;

const main = async () => {
  ConnectDB(MONGO_URL);

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.set('trust proxy', 1)
  app.use(cors());


  router(app);

  // app.get('/', (req, res) => {
  //   res.send('<h1>HELLO ANH EM</h1>')
  // })
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

main().catch((error) => console.log(error));
