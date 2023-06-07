const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const likesRouter = require("./likes/likes-router");
const commentsRouter = require("./comments/comments-router");
const tweetsRouter = require("./tweets/tweets-router");

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server up and running...");
});

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);
server.use("/api/likes", likesRouter);
server.use("/api/tweets", tweetsRouter);
server.use("/api/comments", commentsRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Server Error!...",
  });
});

module.exports = server;
