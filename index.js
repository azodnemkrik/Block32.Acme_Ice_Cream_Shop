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
		DROP TABLE IF EXISTS flavors;
		CREATE TABLE flavors(
			id SERIAL PRIMARY KEY,
			name VARCHAR(100) NOT NULL,
			is_favorite BOOLEAN DEFAULT FALSE,
			created_at TIMESTAMP DEFAULT now(),
			updated_at TIMESTAMP DEFAULT now()
		);
    `

	// CREATE the Table / Send the initial SQL
	await client.query(SQL);
	console.log("Success! Created database Table.");



	// SEED the Table
	SQL = `
		INSERT INTO flavors (name) VALUES ('Vanilla');
		INSERT INTO flavors (name) VALUES ('Chocolate');
		INSERT INTO flavors (name) VALUES ('Strawberry');
		INSERT INTO flavors (name) VALUES ('Butter Pecan');
		INSERT INTO flavors (name) VALUES ('Chocolate Chip');
		INSERT INTO flavors (name) VALUES ('Mint Chocolate Chip');
		INSERT INTO flavors (name) VALUES ('Rocky Road');
		INSERT INTO flavors (name) VALUES ('Neapolitan (Vanilla, Chocolate, Strawberry)');
		INSERT INTO flavors (name) VALUES ('Cookies and Cream');
		INSERT INTO flavors (name) VALUES ('Caramel');
		INSERT INTO flavors (name) VALUES ('Brown Butter Pecan');
		INSERT INTO flavors (name) VALUES ('Chocolate');
		INSERT INTO flavors (name) VALUES ('Chocolate');
		INSERT INTO flavors (name) VALUES ('Chocolate');
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