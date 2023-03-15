import express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middlewares/auth.js";
import {
  getOne,
  getAll,
  getStats,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

/* READ */
router.get("/find/:id", verifyTokenAndAdmin, getOne);
router.get("/", verifyTokenAndAdmin, getAll);
router.get("/stats", verifyTokenAndAdmin, getStats);

/* UPDATE */
router.put("/:id", verifyTokenAndAuthorization, updateUser);

/* DELETE */
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

export default router;
