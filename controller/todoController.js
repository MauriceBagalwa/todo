const uuid = require('uuid');
const models = require('../models');

module.exports = {
    todos: async function (req, res) {
        res.type('json');
        try {
            let items = await models.todos.findAll();

            res.status(200).send(JSON.stringify({
                error: null,
                result: items
            }))
        } catch (error) {
            res.status(500).send(JSON.stringify({
                error: error,
                result: null
            }))
        }
    }
}