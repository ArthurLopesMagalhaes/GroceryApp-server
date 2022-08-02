import { Router } from "express";
import * as AuthValidator from "../validators/AuthValidator";
import * as AuthController from "../controllers/authController";
import { upload } from "../config/multer";

const router = Router();

router.get("/ping", AuthController.ping);

router.post("/signin", AuthValidator.signIn, AuthController.signIn);
router.post(
  "/signup",
  upload.single("avatar"),
  AuthValidator.signUp,
  AuthController.signUp
);

export default router;
