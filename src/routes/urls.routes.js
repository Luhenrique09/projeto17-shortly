import { Router } from "express";
import { create, findById, findShortUrl, removeLink } from "../controllers/urls.controllers.js";
import { auth } from "../middlewares/auth.js";
import { validSchemaUrls } from "../middlewares/urls.middleware.js";

const router = Router();

router.post("/urls/shorten", auth, validSchemaUrls, create)
router.get("/urls/:id", findById);
router.get("/urls/open/:shortUrl", findShortUrl);
router.delete("/urls/:id", auth, removeLink);

export default router;