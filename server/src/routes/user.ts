import { Router } from "express";
import * as USER from "../controlllers/user";

const routes = Router();

routes.post("/login", USER.login);
routes.post("/register", USER.register);


export default routes;
