
var mongoose=require('mongoose');
var Cliente = require('../models/cliente-model');
var Schema=mongoose.Schema;

var PedidoSchema=new Schema({
    pizza: Array,
    quantidade: Number,
    bebida: String,
    horaPedido: Date,
    horaCozinha: Date,
    horaEntrega: Date,
    previsaoTermino: String,
    preco: Number,
    etapa: String,

    clienteId: Number

});

module.exports = mongoose.model('Pedido',PedidoSchema);
