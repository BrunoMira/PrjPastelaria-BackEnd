
var Pedido=require('../models/pedido-model');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/pedidos')
    .get(function(req,res){
       Pedido.find(function(err,pedidos){
           if(err)
                res.send(err);
           res.json(pedidos);
       });
    });

router.route('/pedido')
    .post(function(req,res){
        var pedido = new Pedido(req.body);
        pedido.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Pedido Adicionado'});
        });
    });

router.route('/pedido/:id')

    .get(function (req, res) {
        console.log('id = ' + req.params.id);
        Pedido.findOne({ _id: req.params.id }, function (err, pedido) {
            if (err)
                res.send(err);

            res.json(pedido);
        });
    })

    .put(function(req,res){
        Pedido.findOne({_id:req.params.id},function(err,pedido){

            if(err)
                res.send(err);

           for(prop in req.body){
                Pedido[prop]=req.body[prop];
           }

            Pedido.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Pedido atualizado!' });
            });

        });
    })

    .delete(function(req,res){
        Pedido.remove({
            _id: req.params.id
        }, function(err, pedido) {
            if (err)
                res.send(err);

            res.json({ message: 'Deletado OK' });
        });
    });

module.exports=router;
