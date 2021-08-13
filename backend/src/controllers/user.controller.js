const { User } = require('../models');

module.exports = {
    index: (req, res) => {
        const users = User.findAll();

        return res.json(users);
    }
}
