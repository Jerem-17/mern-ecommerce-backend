/* MODULE'S IMPORTS */
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());

/* ROUTES */

/* MONGOOSE SETUP */
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT || 8000, () =>
      console.log(
        `Connected successfully... \n Server is running oon the port ${PORT} !`
      )
    );
  })
  .catch((error) => {
    console.log(`Did not connected...\n${error} !`);
  });
