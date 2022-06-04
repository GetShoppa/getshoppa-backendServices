const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
require("colors");
const waitListRoute = require("./routes/waitListRoute");

const app = express();
dotenv.config();

//MY MIDDELWARE
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1/waitlist", waitListRoute);

const port = process.env.PORT || 5000;

//connect to db

//OPEN THE SERVER ON PORT 3000
app.listen(port, () => {
	console.log(`\nTHE FORCE IS WITH YOU ON PORT ${port}...\n`.blue);
});
