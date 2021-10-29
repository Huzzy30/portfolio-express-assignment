/*******************************************************************************************************
*                                                                                                      *
*           File name     :  app.js                                                               *
*           Student name :  Huzaifah Mahifa                                                           *
*           StudentID     :  300747824                                                                 *
*           Date  :  10/26/2021                                                                         *
*                                                                                                      *
********************************************************************************************************/


// import required libraries
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const router = require("../routes/index"); 

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// view and view engine setup
app.set("views", "views");
app.set('view engine', 'ejs');
// Describe router route
app.use("/",router);
// Describe the static folder
app.use(express.static('public'));
module.exports = app;
