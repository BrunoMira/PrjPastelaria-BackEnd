
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
     nomeCliente: String,
     cpf: String,
     cep: String,
     endereco: String,
     telefone: String,
     senha: String,
});

module.exports = mongoose.model('Cliente', ClienteSchema);
