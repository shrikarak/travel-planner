
const { Trip, ItineraryItem, User } = require('../models');

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.findAll({ include: [User, ItineraryItem] });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findByPk(req.params.id, { include: [User, ItineraryItem] });
    if (trip) {
      res.json(trip);
    } else {
      res.status(404).json({ error: 'Trip not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTrip = async (req, res) => {
  try {
    const { name, destination, start_date, end_date, UserId } = req.body;
    const trip = await Trip.create({ name, destination, start_date, end_date, UserId });
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByPk(req.params.id);
    if (trip) {
      const { name, destination, start_date, end_date } = req.body;
      await trip.update({ name, destination, start_date, end_date });
      res.json(trip);
    } else {
      res.status(404).json({ error: 'Trip not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByPk(req.params.id);
    if (trip) {
      await trip.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Trip not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
