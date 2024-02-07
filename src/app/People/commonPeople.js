const AbstractPeople = require('./abstractPeople')

class CommonPeople extends AbstractPeople {
    constructor(id, data) {
        super(id);

        this.name = data.name;
        this.mass = data.mass;
        this.height = data.height;
        this.homeworldName = data.homeworld_name;
        this.homeworldId = data.homeworld_id;
    }

    getWeightOnPlanet(planetId) {
        throw new Error("To be implemented");
    }
}

module.exports = CommonPeople;