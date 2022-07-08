import { Router } from "express";

import * as AuthValidator from "../validators/AuthValidator";

import * as UserController from "../controllers/userController";
const router = Router();

router.get("/ping", UserController.ping);

router.post("/signin", AuthValidator.signIn, UserController.signIn);

export default router;
