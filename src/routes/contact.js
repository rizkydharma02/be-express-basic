const express = require('express');

const ContactController = require('../controller/contact');

const router = express.Router();

// Create - Post
router.post('/', ContactController.createNewContact);

// Read - Get
router.get('/', ContactController.getAllContact);

// Read - Get 1
router.get('/:idContact', ContactController.getOneContact);

// Update - Patch
router.patch('/:idContact', ContactController.updateContact);

// Delete - Delete
router.delete('/:idContact', ContactController.deleteContact);

module.exports = router;
