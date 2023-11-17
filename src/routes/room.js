const express = require('express');

const RoomController = require('../controller/room');

const router = express.Router();

// Create - Post
router.post('/', RoomController.createNewRoom);

// Read - Get
router.get('/', RoomController.getAllRoom);

// Read - Get 1
router.get('/:idRoom', RoomController.getOneRoom);

// Update - Patch
router.patch('/:idRoom', RoomController.updateRoom);

// Delete - Delete
router.delete('/:idRoom', RoomController.deleteRoom);

module.exports = router;
