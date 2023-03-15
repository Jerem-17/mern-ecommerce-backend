import express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middlewares/auth.js";
import {
  createOther,
  getOne,
  getAll,
  updateOther,
  deleteOther,
} from "../controllers/orders.js";

const router = express.Router();

/* CREATE */
router.post("/", verifyTokenAndAdmin, createOther);

/* READ */
router.get("/find/:id", getOne);
router.get("/", getAll);

/* UPDATE */
router.put("/:id", verifyTokenAndAdmin, updateOther);

/* DELETE */
router.delete("/:id", verifyTokenAndAdmin, deleteOther);

export default router;
