import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { adminOnly } from "../middleware/adminOnly.js";
import {
  list,
  create,
  update,
  remove,
} from "../controllers/experience.controller.js";

const router = Router();

router.get("/", list);
router.post("/", auth, adminOnly, create);
router.put("/:id", auth, adminOnly, update);
router.delete("/:id", auth, adminOnly, remove);

export default router;
