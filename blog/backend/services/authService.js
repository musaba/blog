var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var Author = require('../models/author');
var user = require('./userService');




var auth = { router };
module.exports = auth;