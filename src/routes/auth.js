import express from "express";

const router = express.Router();

/* REGISTER */
app.post("/register", register);
/* LOGIN */
app.post("/login", login);

export default router;
