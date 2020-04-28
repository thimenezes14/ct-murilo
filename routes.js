const routes = require('express').Router();
const esp = require('./config/ESPrequests');
const moment = require('moment');
const Historico = require('./database/collections/Historico');

routes.get('/obterdados', async (req, res) => {
    try {
        const dadosEsp = (await esp.get('/dados')).data;
        await new Historico(dadosEsp).save();
        
        const docs = await Historico.find({});
        const dados = docs.map((doc, index) => {
            return {
                id: (index + 1),
                usuario: doc.user,
                temperatura_ambiente: doc.tempAmbiente,
                temperatura_banho: doc.tempBanho,
                dia: moment(doc.data_hora_insercao).format('DD/MM/YYYY'),
                horario: moment(doc.data_hora_insercao).format('HH:mm:ss')
            }
        });
        res.status(200).json(dados);
    } catch (err) {
        res.status(500).send(`Ocorreu um erro: ${err}`);
    }
});

module.exports = routes;