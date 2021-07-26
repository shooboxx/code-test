const express = require( "express" );
const app = express();
const PORT = 5000; // default port to listen
const { getVehicle, addVehicle } = require('./vehicle');


// define a route handler for the default home page
app.get( "/", getVehicle);
app.post( "/", addVehicle);

// start the Express server
app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );



// // Testing database
// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
//   if (err) throw err

//   var db = client.db('animals')

//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })