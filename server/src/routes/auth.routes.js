import { Router } from "express";
import { body } from "express-validator";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();

const validate = (req, res, next) => {
  const errors = req.getValidationResult?.() ?? null;
  next();
};

// Simple validators
router.post(
  "/register",
  body("name").notEmpty(),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  register
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").notEmpty(),
  login
);

export default router;
