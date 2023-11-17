const AboutModel = require('../models/about');

const getAllAbout = async (req, res) => {
  try {
    const [data] = await AboutModel.getAllAbout();

    res.status(200).json({
      message: 'Get All About Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const getOneAbout = async (req, res) => {
  const { idAbout } = req.params;

  try {
    const [data] = await AboutModel.getOneAbout(idAbout);
    res.status(200).json({
      message: 'Get One About Successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const createNewAbout = async (req, res) => {
  const { body } = req;

  if (!body.about_fullname || !body.about_position) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
    });
  }
  try {
    await AboutModel.createNewAbout(body);
    res.status(201).json({
      message: 'Create New About Successfully',
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: err,
    });
  }
};

const updateAbout = async (req, res) => {
  const { idAbout } = req.params;
  const { body } = req;

  if (!body.about_fullname || !body.about_position) {
    return res.status(400).json({
      message: 'You Submitted Incorrect Data!',
    });
  }
  try {
    await AboutModel.updateAbout(body, idAbout);
    res.status(201).json({
      message: 'Update About Successfully',
      data: {
        id: idAbout,
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

const deleteAbout = async (req, res) => {
  const { idAbout } = req.params;
  try {
    await AboutModel.deleteAbout(idAbout);
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
  getAllAbout,
  getOneAbout,
  createNewAbout,
  updateAbout,
  deleteAbout,
};
