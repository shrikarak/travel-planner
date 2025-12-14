
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ItineraryItem = sequelize.define('ItineraryItem', {
  activity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  start_time: {
    type: DataTypes.DATE
  },
  end_time: {
    type: DataTypes.DATE
  }
});

module.exports = ItineraryItem;
