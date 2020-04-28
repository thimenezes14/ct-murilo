require('dotenv/config');
require('./database');
const server = require('./config/server');
const PORTA = process.env.PORT;

server.listen(PORTA, () => {
    console.log('\x1b[33m%s\x1b[0m', `Servidor rodando na porta ${PORTA}`);
});