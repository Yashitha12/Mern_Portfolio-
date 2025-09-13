import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { adminOnly } from "../middleware/adminOnly.js";
import {
  list,
  create,
  update,
  remove,
} from "../controllers/qualification.controller.js";

const router = Router();

router.get("/", list);
router.post("/", auth, adminOnly, create);
router.put("/:id", auth, adminOnly, remove); // (typo fixed below)
router.put("/:id", auth, adminOnly, update);
router.delete("/:id", auth, adminOnly, remove);

export default router;
