import { Router } from "express";
import * as UserController from "../controllers/userController";
const router = Router();

router.get("/ping", UserController.ping);

export default router;
