import { Router } from "express";
import * as AuthValidator from "../validators/AuthValidator";
import * as AuthController from "../controllers/authController";
import * as StoreController from "../controllers/storeController";
import * as UserController from "../controllers/userController";
import { upload } from "../config/multer";
import { privateRoute } from "../config/passport";

const router = Router();

router.get("/ping", AuthController.ping);

router.post("/signin", AuthValidator.signIn, AuthController.signIn);
router.post(
  "/signup",
  upload.single("avatar"),
  AuthValidator.signUp,
  AuthController.signUp
);

router.get("/stores", StoreController.getStores);
router.get("/store/:id", StoreController.getStoreById);
router.get("/product/:id", StoreController.getProductById);
router.get("/store/:store_id/products", StoreController.getProducts);
router.get("/testimonials/:store_id/", StoreController.getTestimonials);

router.get("/me/favorites", privateRoute, UserController.getFavorites);
router.get("/me/order_history", privateRoute, UserController.getOrderHistory);

export default router;
