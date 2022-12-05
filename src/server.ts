import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import {
  forbiddenErrorHandler,
  genericErrorHandler,
  notFoundErrorHandler,
  unauthorizedErrorHandler,
} from "./errorHandler";
import mongoose from "mongoose";
import usersRouter from "./api/user";

const server = express();
const port = process.env.PORT || 3001;

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

server.use(express.json());

server.use("/users", usersRouter)

server.use(forbiddenErrorHandler)
server.use(genericErrorHandler)
server.use(notFoundErrorHandler)
server.use(unauthorizedErrorHandler)

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING!);

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log("Server is up and running on port " + port);
});