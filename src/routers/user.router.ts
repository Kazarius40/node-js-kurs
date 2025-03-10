import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.findAll);

router.post("/", userController.create);

router.put("/:id", userMiddleware.findByIdOrThrow, userController.updateById);

router.delete("/:id", userController.deleteById);

export const userRouter = router;
