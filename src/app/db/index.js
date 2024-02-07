'use strict';

const Sequelize = require('sequelize');
const models = require('./models');

let sequelize;

sequelize = new Sequelize("sqlite::memory:", {
  logging: false //console.log
});

const db = {
	Sequelize,
	sequelize,
};

for (const modelInit of models) {
	const model = modelInit(db.sequelize, db.Sequelize.DataTypes);
	db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


const initDB = async () => {
  await db.swPeople.sync({ force: true });
  await db.swPlanet.sync({ force: true });
  await db.logging.sync({ force: true });
}

const populateDB = async () => {
  await db.swPlanet.bulkCreate([
    {
      name: "Tatooine",
      gravity: 1.0
    }
  ]);
  await db.swPeople.bulkCreate([
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      homeworld_name: "Tatooine",
      homeworld_id: "/planets/1"
    }
  ]);
}

const deleteDB = async () => {
  await db.swPeople.drop();
  await db.swPlanet.drop();
  await db.logging.drop();
}

const watchDB = async () => {
  const planets = await db.swPlanet.findAll({
    raw: true,
  });

  const people = await db.swPeople.findAll({
    raw: true,
  });

  const loggings = await db.logging.findAll({
    raw: true,
  })

  console.log("============= swPlanet =============");
  console.table(planets);
  console.log("\n");
  console.log("============= swPeople =============");
  console.table(people);
  console.log("\n");
  console.log("============= logging =============");
  console.table(loggings);
}

const getPeopleId = async (id) => {
  try {
      const result = await db.swPeople.findOne({ where: { id: id } });
      return result || null;
  } catch (error) {
      console.error('Error en getPeopleId:', error);
      throw error;
  }
}

const savePeople = async (data) => {
  try{
    await db.swPeople.bulkCreate([data]);
  } catch(error) {
    console.error('Error en savePeople:', error);
      throw error;
  }
}

db.initDB = initDB;
db.populateDB = populateDB;
db.watchDB = watchDB;
db.deleteDB = deleteDB;
db.getPeopleId = getPeopleId;
db.savePeople = savePeople;

module.exports = db;
