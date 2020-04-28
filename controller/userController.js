const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const models = require("../models");

module.exports = {
  signup: async function(req, res) {
    try {
      
      console.log(req.body);
      const item = {
        id: uuid.v1(),
        usename: req.body.usename,
        psswd: await bcrypt.hash(req.body.psswd, 12),
      };

      const value = await models.users.create(item);
      console.log(value);

      res.status(200).json({
        error: null,
        result: value,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: error,
        result: null,
      });
    }
  },
};
