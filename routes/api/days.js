var express = require('express');
var router = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird');
var Day = require('../../models/day')

router.get('/', function (req, res, next) {
	Day.find({}).exec().then(function(day){
		res.json(day);
	}).then(null, function(err) {next(err)});
})

router.post('/', function (req, res, next) {
	console.log('hhjvi');
	var newDay = new Day ({
		number: 123,
		// hotel: 'Hotel123',
		// restaurants: 'restaurant123',
		// activities: 'activity123'
	});
	newDay.save()
	.then(function (page) {
		console.log('hi')
	})
	.then(null, next);
})

// router.get('/', function (req, res, next) {
// 	Day.create
// 	res.send("Days page");
// })

// router.get('/:id', function (req, res, next) {
// 	res.send(":id page");
// })

// router.post('/days/:id/restaurants', function (req, res, next) {

// })


// router.post('/days/:id/hotels', function (req, res, next) {

// })

// router.post('/days/:id/activities', function (req, res, next) {

// })

module.exports = router;