"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectDB = (mongoURL) => {
    mongoose_1.default.connect(mongoURL, {
        retryWrites: true,
        w: 'majority',
    })
        .then(() => console.log('MongoDB connected to ', mongoURL))
        .catch(err => console.log(err));
};
exports.ConnectDB = ConnectDB;
