const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const router = require("./routes/boarderRoutes");
const app = express();
app.use("/api/", router);
app.listen(port, () => console.log(`Server started on port ${port}`));