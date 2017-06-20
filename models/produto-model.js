
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
    titulo: String,
    descricao: String,
    preco: String,
    quantidade: Number,
    tipo: String,

});

module.exports = mongoose.model('Produto', ProdutoSchema);
