class AbstractPeople {

    constructor(id) {
        if (this.constructor == AbstractPeople) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    async init(data){
        this.id = data.id;
        this.name = data.name;
        this.mass = data.mass;
        this.height = data.height;
        this.homeworld_name = data.homeworld_name;
        this.homeworld_id = data.homeworld_id;
    }

    getId() {
       return this.id;
    }

    getName() {
        return this.name;
    }

    getMass() {
        return this.mass;
    }

    getHeight() {
        return this.height;
    }

    getHomeworldName() {
        return this.homeworldName;
    }

    getHomeworlId() {
        return this.homeworlId;
    }

    getWeightOnPlanet(planetId){
        throw new Error('To be implemented');
    }

    setId(id) {
        this.id = id;
    }
 
    setName(name) {
        this.name = name;
    }

    setMass(mass) {
        this.mass = mass;
    }

    setHeight(height) {
        this.height = height;
    }

    setHomeworldName(homeworldName) {
        this.homeworldName = homeworldName;
    }

    setHomeworlId(homeworlId) {
        this.homeworlId = homeworlId;
    }
}

module.exports = AbstractPeople;