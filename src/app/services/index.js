const people = require('../People');
const planet = require('../Planet');
const logging = require('../Logging');

const getWeightOnPlanetRandom = async () => {
    let idPeople = Math.floor(Math.random() * 83) + 1;//limite de 83 personas maximo en el swapi
    let idPlanet = Math.floor(Math.random() * 60) + 1;//limite de 60 planetas maximo en el swapi

    let swPeople = await people.getPeopleId(idPeople);
    
    if(swPeople.homeworld_id.includes(idPlanet)) {
        throw new Error('HOME PLANET'); 
    }
    
    let weightOnPlanet = await swPeople.getWeightOnPlanet(idPlanet);
    let swPlanet = await planet.getPlanetId(idPlanet);

    return {
        people: swPeople.getName(),
        planet: swPlanet.getName(),
        weight_on_planet: weightOnPlanet
    }
}

module.exports = { people, planet, logging, getWeightOnPlanetRandom };