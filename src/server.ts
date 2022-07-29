import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import apiRoutes from "./routes/api";
import passport from "./config/passport";
import { MulterError } from "multer";

dotenv.config();

const server = express();
server.use(cors());
server.use(passport.initialize());

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use("/", apiRoutes);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status);
  } else {
    res.status(400);
  }
  if (err.message) {
    res.json({ error: err.code });
  } else if (err instanceof MulterError) {
    res.json({ error: err.code });
  } else {
    res.json({ error: "Ocorreu algum erro." });
  }
};
server.use(errorHandler);

server.listen(process.env.PORT);
