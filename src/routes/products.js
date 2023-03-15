import express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middlewares/auth.js";
import {
  createProduct,
  getOne,
  getAll,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const router = express.Router();

/* CREATE */
router.post("/", verifyTokenAndAdmin, createProduct);

/* READ */
router.get("/find/:id", getOne);
router.get("/", getAll);

/* UPDATE */
router.put("/:id", verifyTokenAndAdmin, updateProduct);

/* DELETE */
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

export default router;
