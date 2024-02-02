import express, { Router } from "express";
import { loginController } from "../controllers";

export const loginRouter : Router = express.Router();


loginRouter.post('/login', (req, res) => loginController.login(req, res));