const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Welcome!');
});

module.exports = { routes };
