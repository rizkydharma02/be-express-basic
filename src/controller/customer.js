const CustomerModel = require('../models/customer');

const getAllCustomer = async (req, res) => {
  try {
    const [data] = await CustomerModel.getAllCustomer();

    res.status(200).json({
      message: 'Get All Customer Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const getOneCustomer = async (req, res) => {
  const { idCustomer } = req.params;

  try {
    const [data] = await CustomerModel.getOneCustomer(idCustomer);
    res.status(200).json({
      message: 'Get One Customer Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewCustomer = async (req, res) => {
  const { body } = req;

  if (!body.customer_name || !body.customer_description) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
      data: null,
    });
  }
  try {
    await CustomerModel.createNewCustomer(body);
    res.status(201).json({
      message: 'Create New Customer Successfully',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const updateCustomer = async (req, res) => {
  const { idCustomer } = req.params;
  const { body } = req;

  if (!body.customer_name || !body.customer_description) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
      data: null,
    });
  }
  try {
    await CustomerModel.updateCustomer(body, idCustomer);
    res.status(201).json({
      message: 'Update Customer Successfully',
      data: {
        id: idCustomer,
        ...body,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const deleteCustomer = async (req, res) => {
  const { idCustomer } = req.params;
  try {
    await CustomerModel.deleteCustomer(idCustomer);
    res.status(200).json({
      message: 'Delete About Successfully',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllCustomer,
  getOneCustomer,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};
