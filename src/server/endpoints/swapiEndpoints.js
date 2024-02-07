
const _isWookieeFormat = (req) => {
    if(req.query.format && req.query.format == 'wookiee'){
        return true;
    }
    return false;
}


const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', null, true);
        res.send(data);
    });

    server.get('/hfswapi/getPeople/:id', async (req, res) => {
        await app.services.logging.saveLogging(req, '/hfswapi/getPeople/:id');
        let id = req.params.id;
        let val = await app.services.people.getPeopleId(id);
        res.send(val);
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        await app.services.logging.saveLogging(req, '/hfswapi/getPlanet/:id');
        let id = req.params.id;
        let val = await app.services.planet.getPlanetId(id);
        res.send(val);
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        await app.services.logging.saveLogging(req, '/hfswapi/getWeightOnPlanetRandom');
        await app.services.getWeightOnPlanetRandom();
        res.sendStatus(200);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.services.logging.getLoggings();
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;