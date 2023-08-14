const path = require("node:path");
const express = require("express");
const router = require("./router");
const { corsMiddleware } = require("./middlewares/cors");

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api", router);

app.use(express.static(path.join(__dirname, "../public")));

module.exports = app;
