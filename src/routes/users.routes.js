import { Router } from "express";
import { register, login } from "../controllers/users.controllers.js";
import { validSchemaUsersLogin, validSchemaUsersRegister } from "../middlewares/users.middlewares.js";

const router = Router();

router.post("/signup", validSchemaUsersRegister, register);
router.post("/signin", validSchemaUsersLogin, login);

export default router;