/*
 * Copyright (c) 2025, Shrikara Kaudambady
 * All rights reserved.
 */

const sequelize = require('../config/database');
const User = require('./user');
const Trip = require('./trip');
const ItineraryItem = require('./itineraryItem');

User.hasMany(Trip);
Trip.belongsTo(User);

Trip.hasMany(ItineraryItem);
ItineraryItem.belongsTo(Trip);

const db = {
  sequelize,
  User,
  Trip,
  ItineraryItem
};

module.exports = db;