import express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middlewares/auth.js";
import {
  createCart,
  getOne,
  getAll,
  updateCart,
  deleteCart,
} from "../controllers/cart.js";

const router = express.Router();

/* CREATE */
router.post("/", verifyToken, createCart);

/* READ */
router.get("/find/:id", verifyTokenAndAuthorization, getOne);
router.get("/", verifyTokenAndAdmin, getAll);

/* UPDATE */
router.put("/:id", verifyTokenAndAuthorization, updateCart);

/* DELETE */
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

export default router;
