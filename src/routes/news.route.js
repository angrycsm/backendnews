import { Router } from "express";
import newsController from "../controllers/news.controller.js";
const route = Router();

route.post("/", newsController.create);
route.get("/", newsController.findAll);

export default route;
