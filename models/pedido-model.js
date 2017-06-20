
var mongoose=require('mongoose');
var Produto = require('../models/produto-model');
var Schema=mongoose.Schema;

var PedidoSchema=new Schema({
    pizza: Array,
    horaPedidoFeito: Date,
    horaPedidoAceito: Date,
    horaCozinhaAceito: Date,
    horaCozinhaPronto: Date,
    horaEntregaCaminho: Date,
    horaEntregaPronto: Date,
    horaRejeita: Date,
    preco: Number,
    precoTotal: Number,
    estaPago: Boolean,
    etapa: String,
    clienteCPF: String,
    motivoRejeicao: String,

});

module.exports = mongoose.model('Pedido',PedidoSchema);
