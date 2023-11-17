const express = require('express');

const AboutController = require('../controller/about');

const router = express.Router();

// Create - Post
router.post('/', AboutController.createNewAbout);

// Read - Get
router.get('/', AboutController.getAllAbout);

// Read - Get 1
router.get('/:idAbout', AboutController.getOneAbout);

// Update - Patch
router.patch('/:idAbout', AboutController.updateAbout);

// Delete - Delete
router.delete('/:idAbout', AboutController.deleteAbout);

module.exports = router;
