const dbPool = require('../config/database');

const getAllRoom = () => {
  const SQLQuery = 'SELECT * FROM room';

  return dbPool.execute(SQLQuery);
};

const getOneRoom = (idRoom) => {
  const SQLQuery = `SELECT * FROM room WHERE id = ${idRoom}`;

  return dbPool.execute(SQLQuery);
};

const createNewRoom = (body) => {
  const SQLQuery = `INSERT INTO room (room_type, room_price) VALUES ('${body.room_type}', '${body.room_price}')`;

  return dbPool.execute(SQLQuery);
};

const updateRoom = (body, idRoom) => {
  const SQLQuery = `UPDATE room SET room_type = '${body.room_type}', room_price = '${body.room_price}' WHERE id = '${idRoom}'`;

  return dbPool.execute(SQLQuery);
};

const deleteRoom = (idRoom) => {
  const SQLQuery = `DELETE FROM room WHERE id=${idRoom}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllRoom,
  getOneRoom,
  createNewRoom,
  updateRoom,
  deleteRoom,
};
