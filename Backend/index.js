const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { connectDB } = require("./DB/database");

const app = express();
const PORT = process.env.PORT || 4003;

app.use(cors());
app.use(bodyParser.json());
app.use( userRoutes);
app.use( adminRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
