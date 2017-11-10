
"use strict";

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number
});

// Compile model from schema
module.exports = mongoose.model('userModel', userSchema );

