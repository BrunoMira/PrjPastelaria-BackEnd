
var Usuario=require('../models/usuario-model');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/usuarios')
    .get(function(req,res){
       Usuario.find(function(err,usuarios){
           if(err)
                res.send(err);
           res.json(usuarios);
       });
    });

router.route('/usuario')
    .post(function(req,res){
        var usuario=new Usuario(req.body);
        usuario.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Usuario Adicionado'});
        });
    });

router.route('/usuario/autenticar')
    .post(function (req, res) {
        Usuario.findOne({ cpf: req.body.cpf }, function (err, e){
            if(err){
                res.send(err)
            }
            if (e && e.senha == req.body.senha){
                res.send(e);
            }else{
                res.send({usuario: null, message: "Nenhum usuario encontrado"});
            }
        })
       
    });

router.route('/usuario/:id')
    .put(function(req,res){
        Usuario.findOne({_id:req.params.id},function(err,usuario){

            if(err)
                res.send(err);

           for(prop in req.body){
                usuario[prop]=req.body[prop];
           }

            usuario.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Usuario atualizado!' });
            });

        });
    })

    .get(function(req,res){
        Usuario.findOne({_id:req.params.id},function(err, usuario) {
            if(err)
                res.send(err);

            res.json(usuario);
        });
    })

    .delete(function(req,res){
        Usuario.remove({
            _id: req.params.id
        }, function(err, usuario) {
            if (err)
                res.send(err);

            res.json({ message: 'Deletado OK' });
        });
    });

module.exports = router;

