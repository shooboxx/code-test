const express = require( "express" );

const app = express();
const PORT = 5000; // default port to listen
const { getVehicle, addVehicle } = require('./vehicle');

app.use(express.json());
// define a route handler for the default home page
app.get( "/", getVehicle);
app.post( "/", addVehicle);

// start the Express server
app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );