const express = require("express");
const ratesRouter = express.Router();
// import rates controller from controller folde
const getRates = require("../controllers/Rates");

ratesRouter.get("/api/rates", getRates);

module.exports = ratesRouter;
