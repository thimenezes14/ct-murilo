const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('\x1b[32m%s\x1b[0m', "Conexão com base de dados estabelecida"))
    .catch(err => console.log('\x1b[31m%s\x1b[0m', "Erro na conexão com a base de dados: " + err))