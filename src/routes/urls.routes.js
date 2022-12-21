import { Router } from "express";
import { create } from "../controllers/urls.controllers.js";
import { validSchemaUrls } from "../middlewares/urls.middleware.js";

const router = Router();

router.post("/urls/shorten",validSchemaUrls, create)

export default router;