class Planet {
    constructor(id){
        this.name = null;
        this.gravity = 0.0;
    }

    async init(data){
        this.name = data.name;
        this.gravity = data.gravity;
    }

    getName() {
        return this.name;
    }

    getGravity() {
        return this.gravity;
    }
}

module.exports = Planet;