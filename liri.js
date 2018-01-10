import { error } from "util";

require("dotenv").config();

//Creating variables to require the installed packages and access keys

var twitter = require("twitter");
var spotify = require("node-spotify-api");
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
    };

}

//Search function that finds a song in Spotify

var getSpotify = function() {

    //Search for track

    //Throw error if no track is returned

    //Loop through results of search and log out band/singer, name of song, and album title

}

//Search function to find a movie and log out the results

var getMovie = function() {

    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
}

    request(queryUrl) {

        if (error) {

            throw error;

        else {

            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year released: " + JSON.parse(body).Year);
            console.log("IMDB rating: " + JSON.parse(body).imdbRating);
            console.log("Tomatometer: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country of release: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: ");
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    }


//Run the method