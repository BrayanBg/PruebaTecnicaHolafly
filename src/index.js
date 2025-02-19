

const bodyParser = require('body-parser');

const createServer = require('./server');

const app = require('./app');

async function start() {
	const server = await createServer(app);

  server.get('/', (req, res) => {
    res.send('Welcome to Holafly\'s Technical test!');
  });

	// Start the GraphQL server
  const port = process.env.PORT || 4567;
	server.listen(port , () => {
		// eslint-disable-next-line no-console
		console.log(`Server is running on port: ${port}`);
		app.db.initDB()
			.then(() => {
        		console.log('Inicializacion completada.');
				app.db.populateDB()
					.then(() => {
						console.log('LLenado completado');
					})
					.catch(error => {
						console.error('Error al realizar LLenado:', error);
					});
    		})
    		.catch(error => {
        		console.error('Error al realizar la Inicializacion:', error);
    		});
	});

}

start();