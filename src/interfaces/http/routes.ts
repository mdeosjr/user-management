import { Router } from "express";
import * as userController from "@controllers/userController";
import * as authController from "@controllers/authController";

const router = Router();

router.post('/users', userController.createUser);
router.put('/users', userController.updateUser);
router.post('/login', authController.login);
router.put('/address', userController.updateAddress)

export default router;
