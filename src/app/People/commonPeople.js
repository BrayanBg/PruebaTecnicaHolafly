const AbstractPeople = require('./abstractPeople')

class CommonPeople extends AbstractPeople {
    constructor(id) {
        super(id);
    }

    getWeightOnPlanet(planetId) {
        throw new Error("To be implemented");
    }
}

module.exports = CommonPeople;