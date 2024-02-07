const people = require('../People');
const planet = require('../Planet');
const logging = require('../Logging');

const getWeightOnPlanetRandom = async () => {
    let idPeople = Math.floor(Math.random() * 83) + 1;//limite de 83 personas maximo en el swapi
    let idPlanet = Math.floor(Math.random() * 60) + 1;//limite de 60 planetas maximo en el swapi

    let swPeople = await people.getPeopleId(idPeople);
    let swPlanet = await planet.getPlanetId(idPlanet);

    console.log(swPeople.mass);
    console.log(swPlanet.gravity);

}

module.exports = { people, planet, logging, getWeightOnPlanetRandom };