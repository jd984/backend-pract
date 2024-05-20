import dotenv from "dotenv";
import connectDB from "../src/db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "../env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App starting error: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MonogoDB connection failed !!", err);
  });
