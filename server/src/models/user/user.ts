import { Document, Schema, model as MongooseModel } from "mongoose";

export interface IUser {
    admin: boolean;
    email: string;
    password: string;
    name: string | undefined;
    avatarUrl: string;
    contactNumber: string;
    token: string;
}
export interface IUserModel extends IUser, Document {}

const userSchema = new Schema(
    {
        admin: { type: Boolean, required: true},
        email: { type: String, required: true },
        password: { type: String, required: true },
        name: { type: String, required: false },
        avatarUrl: { type: String, required: false },
        contactNumber: { type: String, required: false },
        token: { type: String, required: true }
    }, {timestamps: true}
)

export default MongooseModel<IUserModel>('User', userSchema)