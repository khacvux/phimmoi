"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_1 = require("../utils/auth");
const mongoose_1 = __importDefault(require("mongoose"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        //CHECK EMAIL
        const existingUser = yield user_1.default.findOne({ email });
        const error = {
            successful: false,
            message: "Email or password is incorrect",
            data: null
        };
        if (!existingUser)
            return res.status(400).json(error);
        if (existingUser.admin)
            return res.status(400).json(error);
        //CHECK PASSWORD
        const validPassword = yield bcrypt_1.default.compare(password, existingUser.password);
        //IF NOT CORRECT
        if (!validPassword)
            return res.status(400).json(error);
        // ELSE GENERATE TOKEN
        const accessToken = (0, auth_1.createToken)(existingUser._id);
        (0, auth_1.sendRefreshToken)(res, existingUser);
        const response = {
            successful: true,
            message: "Login successful",
            token: accessToken,
            email,
            name: existingUser.name,
            contactNumber: existingUser.contactNumber,
            avatarUrl: existingUser.avatarUrl,
            _id: existingUser._id,
            data: null
        };
        return res.status(200).json(response);
    }
    catch (error) {
        const e = {
            successful: false,
            message: `Server error ${error}`,
            data: null
        };
        console.log(e);
        return res.status(400).json(e);
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, contactNumber, name } = req.body;
    try {
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser) {
            const error = {
                successful: false,
                message: `Email already exists`,
                data: null
            };
            return res.status(400).json(error);
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const _id = new mongoose_1.default.Types.ObjectId();
        const newUser = new user_1.default({
            _id,
            admin: false,
            email,
            password: hashed,
            name,
            avatarUrl: "",
            contactNumber,
        });
        yield newUser.save();
        const response = {
            successful: true,
            message: `Register Successfully`,
            data: null
        };
        return res.status(200).json(response);
    }
    catch (error) {
        const e = {
            successful: false,
            message: `Server error ${error}`,
            data: null
        };
        console.log(e);
        return res.status(400).json(e);
    }
});
exports.register = register;
