import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" })); // used for json data
app.use(express.urlencoded({ extended: true, limit: "10kb" })); // to encode the url
app.use(express.static("public")); // used to create a folder that will stored public assets
app.use(cookieParser()); //use to access the cookie or perform crud operation on cookie in user browser

export { app };
