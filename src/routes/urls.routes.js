import { Router } from "express";
import { create } from "../controllers/urls.controllers.js";

const router = Router();

router.post("/urls/shorten", create)

export default router;