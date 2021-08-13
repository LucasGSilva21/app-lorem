const { Router } = require('express');
const { userRoutes } = require('./user.routes');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Welcome!');
});

routes.use('/users', userRoutes);

module.exports = { routes };
