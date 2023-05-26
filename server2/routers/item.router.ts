import { Router } from "express";
import * as itemController from "../controllers/item.controller";

const router = Router();

router.get("/", itemController.GetItems);

export default router;
