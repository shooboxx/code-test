const express = require( "express" );
const bodyParser = require('body-parser');


const app = express();
const PORT = 5000; // default port to listen
const { getVehicle, addVehicle } = require('./vehicle');

const jsonParser = bodyParser.json();
// define a route handler for the default home page
app.get( "/", getVehicle);
app.post( "/", jsonParser, addVehicle);

// start the Express server
app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );



// // Testing database
// const { Client } = require('pg');

// const client = new Client({
// //   connectionString: process.env.DATABASE_URL,
//   connectionString: `postgres://gblnzulcumvlag:93b42a2de09b117b290a5d321c34a712f14086d1572ea3f42278a0d8b8c235cf@ec2-52-200-119-0.compute-1.amazonaws.com:5432/d8c31nmisis38f`,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//     if (!err) console.log('it worked')
//   client.end();
// });