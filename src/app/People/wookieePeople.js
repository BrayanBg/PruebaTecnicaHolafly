const AbstractPeople = require('./abstractPeople')

class WookieePeople extends AbstractPeople {
    
    constructor(id, data) {
        super(id);

        this.name = data.name;
        this.mass = data.mass;
        this.height = data.height;
        this.homeworldName = data.homeworldName;
        this.homeworldId = data.homeworldId;
    }

    getWeightOnPlanet(planetId) {
        throw new Error("To be implemented");
    }
}