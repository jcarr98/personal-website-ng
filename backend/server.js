const express = require('express');
const app = express();
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:8000/";

app.listen(8000, () => {
    console.log("server started!")
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("recipes");
    let query = {name: "American Chop Suey"};
    dbo.collection("all_recipes").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});