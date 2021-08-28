const mongoose = require("mongoose");

const papers = mongoose.Schema({
  "papercode": {
    "type": "string"
  },
  "paperjson": {
    "type": "object"
  }
});

const customerModel = mongoose.model('papers', papers);

module.exports = customerModel;


