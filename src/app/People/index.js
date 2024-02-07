const WookieePeople = require('./wookieePeople');
const CommonPeople = require('./commonPeople');
const db = require('../db');
const swapiFunctions = require('../swapiFunctions')

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
    let data = person.dataValues;
    const commonPerson = new CommonPeople(id, data);
    return commonPerson;
}

module.exports = { peopleFactory, getPeopleId }