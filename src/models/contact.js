const dbPool = require('../config/database');

const getAllContact = () => {
  const SQLQuery = 'SELECT * FROM contact';

  return dbPool.execute(SQLQuery);
};

const getOneContact = (idContact) => {
  const SQLQuery = `SELECT * FROM contact WHERE id=${idContact}`;

  return dbPool.execute(SQLQuery);
};

const createNewContact = (body) => {
  const SQLQuery = `INSERT INTO contact (contact_fullname, contact_email, contact_phone, contact_message) VALUES ('${body.contact_fullname}', '${body.contact_email}', '${body.contact_phone}', '${body.contact_message}')`;

  return dbPool.execute(SQLQuery);
};

const updateContact = (body, idContact) => {
  const SQLQuery = `UPDATE contact SET contact_fullname = '${body.contact_fullname}', contact_email = '${body.contact_email}', contact_phone = '${body.contact_phone}', contact_message = '${body.contact_message}' WHERE id = '${idContact}'`;

  return dbPool.execute(SQLQuery);
};

const deleteContact = (idContact) => {
  const SQLQuery = `DELETE FROM contact WHERE id=${idContact}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllContact,
  getOneContact,
  createNewContact,
  updateContact,
  deleteContact,
};
