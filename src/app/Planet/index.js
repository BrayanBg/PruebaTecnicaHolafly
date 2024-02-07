const Planet = require('./Planet');
const db = require('../db');
const swapiFunctions = require('../swapiFunctions')

const getPlanetId = async (id) => {
    let planet = await db.getPlanetId(id);
    
    if(planet == null) {
        planet = await swapiFunctions.genericRequest(`https://swapi.dev/api/planets/${id}`, 'GET', null, true);
        const gravity = planet.gravity.split(' ');

        let data = {
            name: planet.name,
            gravity: parseFloat(gravity[0])
        }

        const planetDB = new Planet();
        await planetDB.init(data);
        await db.savePlanet(planetDB);
        return planetDB;
    }

    const planetDB = new Planet();
    await planetDB.init(planet.dataValues);

    return planetDB;
}

module.exports = { getPlanetId }