const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	password: process.env.PGPASSWORD,
	database: process.env.PGDATABASE,
	port: parseInt(process.env.PGPORT)
});

console.log("\nDB CONNECTION => ", pool.options);

module.exports = pool;
