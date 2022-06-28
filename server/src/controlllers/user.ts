import { Request, Response } from "express";
import User, { IUserModel } from "../models/user/user";
import IResponse from "../models/return";
import bcrypt from "bcrypt";
import { sendRefreshToken, createToken } from "../utils/auth";
import { LoginType, RegisterType } from "../models/auth/auth";
import mongoose from "mongoose";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    //CHECK EMAIL
    const existingUser = await User.findOne({ email });
    const error: IResponse = {
      successful: false,
      message: "Email or password is incorrect",
    };
    if (!existingUser) return res.status(400).json(error);
    if (existingUser.admin) return res.status(400).json(error);

    //CHECK PASSWORD
    const validPassword = await bcrypt.compare(password, existingUser.password);
    //IF NOT CORRECT
    if (!validPassword) return res.status(400).json(error);

    // ELSE GENERATE TOKEN
    const accessToken = createToken(existingUser._id);
    sendRefreshToken(res, existingUser);
    const response: LoginType = {
      successful: true,
      message: "Login successful",
      token: accessToken,
      email,
      name: existingUser.name,
      contactNumber: existingUser.contactNumber,
      avatarUrl: existingUser.avatarUrl,
      _id: existingUser._id,
    };
    return res.status(200).json(response);
  } catch (error) {
    const e: IResponse = {
      successful: false,
      message: `Server error ${error}`,
    };
    console.log(e);
    return res.status(400).json(e);
  }
};

const register = async (req: Request, res: Response) => {
  const { email, password, contactNumber, name } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error: IResponse = {
        successful: false,
        message: `Email already exists`,
      };
      return res.status(400).json(error);
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const _id = new mongoose.Types.ObjectId();
    const token = createToken(_id);

    const newUser: IUserModel = new User({
      _id,
      admin: false,
      email,
      password: hashed,
      name,
      avatarUrl: "",
      contactNumber,
      token,
    });
    await newUser.save();
    const response: IResponse = {
      successful: true,
      message: `Register Successfully`,
    };

    return res.status(200).json(response);
  } catch (error) {
    const e: IResponse = {
      successful: false,
      message: `Server error ${error}`,
    };
    console.log(e);
    return res.status(400).json(e);
  }
};

export { login, register };
