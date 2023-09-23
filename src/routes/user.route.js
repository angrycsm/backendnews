import { Router } from "express";
import userController from "../controllers/user.controller.js";
const route = Router();

route.get('/', userController.soma)

export default route