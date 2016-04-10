var express = require('express');
var request = require('request');
var config = require('./config.js');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Thor Root
app.get('/', function(req, res) {
	res.send('Thor API Root');
});

// POST /weather
app.post('/weather', function(req, res) {
	var body = req.body;

	getWeather(body.q, body.cnt).then(function(data) {
		res.json(data);
	}, function() {
		res.status(500).send();
	});
});

var URL_BEGINNING = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
var API_KEY = config.openweathermap.apiKey;
var URL_END = '&appid=' + API_KEY;

function getWeather(q, cnt) {
	return new Promise(function(resolve, reject) {
		var cityEncoded = encodeURIComponent(q);
		var urlFull = URL_BEGINNING + 'q=' + cityEncoded + '&cnt=' + cnt + URL_END;
		console.log(urlFull);
		request({
			url: urlFull,
			json: true
		}, function(error, response, body) {
			if (error) {
				reject(error);
			} else {
				resolve(body);
			}
		});
	});
}

app.listen(PORT, function() {
	console.log('Listening on port ' + PORT + '...');
});