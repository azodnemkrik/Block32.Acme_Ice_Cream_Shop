const express = require("express");
const app = express();
const pg = require("pg");
const client = new pg.Client("postgres://localhost/acme_ice_cream_shop");
app.use(express.json())
app.use(require('morgan')('dev'))

const init = async () => {



	// Define the PORT & Listen
	const PORT = 4000;
	app.listen(PORT, () => {
		console.log(`Listening at PORT ${PORT}`);
	});
};

init();