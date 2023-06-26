import { Router } from "express";
import * as userController from "@controllers/userController";
import * as authController from "@controllers/authController";

const router = Router();

router.post('/users', userController.createUser);
router.patch('/users', userController.updateUser);
router.post('/login', authController.login);
router.put('/address', userController.updateAddress);
router.get('/me', userController.getUser)

export default router;
