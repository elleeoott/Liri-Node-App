require("dotenv").config();

//Creating variables to require the installed packages and access keys

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var keys = require("./keys");
var fs = require("fs");

//Calls on Spotify key

var spotify = new Spotify(keys.spotify);

//Calls on Twitter key

var client = new Twitter(keys.twitter);