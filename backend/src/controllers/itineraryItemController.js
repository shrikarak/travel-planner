/*
 * Copyright (c) 2025, Shrikara Kaudambady
 * All rights reserved.
 */

const { ItineraryItem, Trip } = require('../models');

exports.getAllItineraryItems = async (req, res) => {
  try {
    const itineraryItems = await ItineraryItem.findAll({ include: Trip });
    res.json(itineraryItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItineraryItemById = async (req, res) => {
  try {
    const itineraryItem = await ItineraryItem.findByPk(req.params.id, { include: Trip });
    if (itineraryItem) {
      res.json(itineraryItem);
    } else {
      res.status(404).json({ error: 'Itinerary item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createItineraryItem = async (req, res) => {
  try {
    const { activity, start_time, end_time, TripId } = req.body;
    const itineraryItem = await ItineraryItem.create({ activity, start_time, end_time, TripId });
    res.status(201).json(itineraryItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateItineraryItem = async (req, res) => {
  try {
    const itineraryItem = await ItineraryItem.findByPk(req.params.id);
    if (itineraryItem) {
      const { activity, start_time, end_time } = req.body;
      await itineraryItem.update({ activity, start_time, end_time });
      res.json(itineraryItem);
    } else {
      res.status(404).json({ error: 'Itinerary item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItineraryItem = async (req, res) => {
  try {
    const itineraryItem = await ItineraryItem.findByPk(req.params.id);
    if (itineraryItem) {
      await itineraryItem.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Itinerary item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};