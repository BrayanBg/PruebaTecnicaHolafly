const WookieePeople = require('./wookieePeople');
const CommonPeople = require('./commonPeople');
const db = require('../db');
const planet = require('../Planet');
const swapiFunctions = require('../swapiFunctions');

const peopleFactory = async (id, lang) => {
    let people = null;
    if (lang == 'wookiee'){
        people = new WookieePeople(id);
    } else {
        people = new CommonPeople(id);
    }
    await people.init();
    return people;
}

const getPeopleId = async (id) => {
    let person = await db.getPeopleId(id);
    
    if(person == null) {
        person = await swapiFunctions.genericRequest(`https://swapi.dev/api/people/${id}`, 'GET', null, true);
        const parts = person.homeworld.split('/');
        let planetApi = await planet.getPlanetId(parts[parts.length - 2]);
        
        let data = {
            name: person.name,
            mass: person.mass,
            height: person.height,
            homeworld_name: planetApi.name,
            homeworld_id: `/${parts[parts.length - 3]}/${parts[parts.length - 2]}`
        }    

        const commonPerson = new CommonPeople(id, data);
        await db.savePeople(commonPerson);
        return commonPerson;
    }

    const commonPerson = new CommonPeople(id, person.dataValues);
    return commonPerson;
}

module.exports = { peopleFactory, getPeopleId }