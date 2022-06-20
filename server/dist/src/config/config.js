"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = process.env.SERVER_PORT || '8000';
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'phimmoi';
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.2rsmb.mongodb.net`;
const MONGO = {
    url: MONGO_URL
};
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
const config = {
    server: SERVER,
    mongo: MONGO,
};
exports.default = config;
