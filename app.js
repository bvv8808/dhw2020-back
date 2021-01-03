const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", require("./src/routes/main"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
