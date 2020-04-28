const mongoose = require('mongoose');

const Historico = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    tempAmbiente: {
        type: Number,
        required: true
    },
    tempBanho: {
        type: Number,
        required: true
    },
    data_hora_insercao: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('historico', Historico);