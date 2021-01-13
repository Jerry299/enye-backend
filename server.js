const express = require("express");
const app = express();

// bring in express bodyparser
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

// import routes
const ratesRouter = require("./routes/Rates");

//use endpoints

app.use("/api", ratesRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
