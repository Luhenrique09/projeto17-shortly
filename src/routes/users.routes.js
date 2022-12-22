import { Router } from "express";
import { register, login, findUsers, ranking } from "../controllers/users.controllers.js";
import { auth } from "../middlewares/auth.js";
import { validSchemaUsersLogin, validSchemaUsersRegister } from "../middlewares/users.middlewares.js";

const router = Router();

router.post("/signup", validSchemaUsersRegister, register);
router.post("/signin", validSchemaUsersLogin, login);
router.get("/users/me", auth, findUsers);
router.get("/ranking", ranking)

export default router;