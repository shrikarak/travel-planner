/*
 * Copyright (c) 2025, Shrikara Kaudambady
 * All rights reserved.
 */

const express = require('express');
const router = express.Router();
const itineraryItemController = require('../controllers/itineraryItemController');

router.get('/', itineraryItemController.getAllItineraryItems);
router.get('/:id', itineraryItemController.getItineraryItemById);
router.post('/', itineraryItemController.createItineraryItem);
router.put('/:id', itineraryItemController.updateItineraryItem);
router.delete('/:id', itineraryItemController.deleteItineraryItem);

module.exports = router;