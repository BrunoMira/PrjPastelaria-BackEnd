
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var textoSchema=new Schema({
    cpf: String,
    nome: String,
    senha: String,
    permissao: String,

});

module.exports=mongoose.model('Usuario',textoSchema);
