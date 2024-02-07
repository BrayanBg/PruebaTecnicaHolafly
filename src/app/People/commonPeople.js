const AbstractPeople = require('./abstractPeople')

class CommonPeople extends AbstractPeople {
    constructor(id, data) {
        super(id);

        this.id = id;
        this.name = data.name;
        this.mass = data.mass;
        this.height = data.height;
        this.homeworld_name = data.homeworld_name;
        this.homeworld_id = data.homeworld_id;
    }

    getWeightOnPlanet(planetId) {
        throw new Error("To be implemented");
    }
}

module.exports = CommonPeople;