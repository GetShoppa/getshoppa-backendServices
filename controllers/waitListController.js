const pool = require("../db");

//get all waitlist
const getALLWaitLister = async (req, res) => {
	try {
		const { rows } = await pool.query("SELECT * FROM waitlist");
		res.status(200).json({
			status: "success",
			count: rows.length,
			data: rows,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			error: err.message,
		});
	}
};

// ADD A NEW WAITLISTER
const createWaitLister = async (req, res) => {
	try {
		const { name, business_name, email, phone_no } = req.body;

		//check if email exists
		const { rows } = await pool.query("SELECT s FROM waitlist s WHERE s.email = $1", [email]);

		if (rows.length) {
			return res.status(400).json({
				status: "fail",
				message: "email already exists",
			});
		}

		// Add WaitLister to the database
		const newWaitLister = await pool.query(
			"INSERT INTO waitlist (name, business_name, email, phone_no) VALUES ($1, $2, $3, $4) RETURNING *",
			[name, business_name, email.toLowerCase(), phone_no]
		);
		res.status(201).json({
			status: "success",
			data: newWaitLister.rows[0],
			message: `${newWaitLister.rows[0].name} added to the waitlist`,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err.message,
		});
	}
};

module.exports = {
	getALLWaitLister,
	createWaitLister,
};
