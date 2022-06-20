"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./src/config/config"));
const mongo_1 = require("./src/config/mongo");
const app = (0, express_1.default)();
const PORT = config_1.default.server.port;
const MONGO_URL = config_1.default.mongo.url;
(0, mongo_1.ConnectDB)(MONGO_URL);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/home', (req, res) => {
    res.send('<h1>Hello</h1>');
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
