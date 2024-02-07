const AbstractPeople = require('./abstractPeople')

class WookieePeople extends AbstractPeople {
    
    constructor(id) {
        super(id);
    }

    getWeightOnPlanet(planetId) {
        throw new Error("To be implemented");
    }
}

module.exports = WookieePeople;