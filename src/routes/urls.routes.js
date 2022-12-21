import { Router } from "express";
import { create, findById, findShortUrl } from "../controllers/urls.controllers.js";
import { validSchemaUrls } from "../middlewares/urls.middleware.js";

const router = Router();

router.post("/urls/shorten",validSchemaUrls, create)
router.get("/urls/:id", findById);
router.get("/urls/open/:shortUrl", findShortUrl)
export default router;