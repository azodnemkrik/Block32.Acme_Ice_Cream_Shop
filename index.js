const express = require("express");
const app = express();
const pg = require("pg");
const client = new pg.Client("postgres://localhost/acme_ice_cream_shop");
app.use(express.json())
app.use(require('morgan')('dev'))

const init = async () => {
	// Make Connection
	await client.connect();
	console.log("Success! Connected to database.");

	// Define the Table
	let SQL = `

    `

	// CREATE the Table / Send the initial SQL
	await client.query(SQL);
	console.log("Success! Created database Table.");



	// SEED the Table
	SQL = `

	`;
	await client.query(SQL);
	console.log("Success! Seeded database!");



	// Define the PORT & Listen
	const PORT = 4000;
	app.listen(PORT, () => {
		console.log(`Listening at PORT ${PORT}`);
	});
};

init();