import IResponse from "../return";
interface IUserTypeReturn extends IResponse {
    email: string;
    name: string | undefined;
    avatarUrl: string | undefined;
    contactNumber: string;
    _id: string;
}

export interface RegisterType extends IResponse {
    email: string;
    password: string | undefined;
    name: string | undefined;
    contactNumber: string | undefined;
}

export interface LoginType extends IUserTypeReturn {
    token: string | null;
}