var express = require('express');
var router = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird');
var Day = models.Day;

$.ajax({
    method: 'GET',
    url: '/api/days',
    data: Day,
    success: function (responseData) {
        return responseData;
    },
    error: function (errorObj) {
        return errorObj;
    }
});
//
// router.get('/api/days/:id', function (req, res, next) {
//
// })
//
// router.post('/api/days/:id/restaurants', function (req, res, next) {
//
// })
//
//
// router.post('/api/days/:id/hotels', function (req, res, next) {
//
// })
//
// router.post('/api/days/:id/activities', function (req, res, next) {
//
// })


module.exports = router;
