/*jshint esversion: 6 */

const express = require('express'),
    request = require('request'),
    url = require('url'),
    cors = require('cors'),
    app = express();

// https://server-prxkebeupz.now.sh

const whitelist = [/sinisterwaltz\.com$/, /\.now\.sh$/, /localhost:4200$/];
const endPoint = 'http://ws.audioscrobbler.com/2.0/';
const apiKey = 'YOUR_API_KEY';

const corsOptions = {
    origin: function(origin, callback) {
        let originIsWhitelisted = checkDomain(origin, whitelist);
        callback(originIsWhitelisted ? null : `Bad Request: ${origin}`, originIsWhitelisted);
    }
};

function checkDomain(origin, whitelist) {
    for (const u of whitelist) {
        if (u.test(origin)) {
            return true;
        }
    }
    return false;
}

// app.use(cors());

app.use('/api', cors(corsOptions), function(req, res) {
    req.query.api_key = apiKey;
    req.pipe(request({ qs: req.query, uri: endPoint })).pipe(res);
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
