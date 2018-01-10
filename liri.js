import { error } from "util";

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

//Search function that finds tweets from Twitter account

var getTwitter = function() {

    //Accesses the Twitter key

    var client = new Twitter(keys.twitter);

    var params = {screen_name: "evanldarst", count: 10};
    client.get("statuses/user_timeline", params, function(error, tweets, response)) {

        if (error) {

            throw error
        }

        console.log(tweets[0].text);
        for (var i = 0; i < tweets.length; i++) {
            
            console.log(this);
        }
    }


}

//Search function that finds a song in Spotify


//Run the method