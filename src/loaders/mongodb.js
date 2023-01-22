const mongoose = require('mongoose');

async function startDB() {
  await mongoose.connect('mongodb+srv://rodrigopdo:131004@cluster0.sjneqxy.mongodb.net/test')
}

module.exports = startDB();
