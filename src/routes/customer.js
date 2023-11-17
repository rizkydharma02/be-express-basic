const express = require('express');

const CustomerController = require('../controller/customer');

const router = express.Router();

// Create - Post
router.post('/', CustomerController.createNewCustomer);

// Read - Get
router.get('/', CustomerController.getAllCustomer);

// Read - Get 1
router.get('/:idCustomer', CustomerController.getOneCustomer);

// Update - Patch
router.patch('/:idCustomer', CustomerController.updateCustomer);

// Delete - Delete
router.delete('/:idCustomer', CustomerController.deleteCustomer);

module.exports = router;
