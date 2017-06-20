
var Produto = require('../models/produto-model');
var express = require('express');

//configure routes

var router = express.Router();

router.route('/produtos')
    .get(function (req, res) {
        Produto.find(function (err, produtos) {
            if (err)
                res.send(err);
            res.json(produtos);
        });
    });

router.route('/produto')
    .post(function (req, res) {
        var produto = new Produto(req.body);
        produto.save(function (err) {
            if (err)
                res.send(err);
            res.send({ message: 'Produto Adicionado' });
        });
    });

router.route('/produto/:id')
    .put(function (req, res) {
        Produto.findOne({ _id: req.params.id }, function (err, produto) {

            if (err)
                res.send(err);

            for (prop in req.body) {
                produto[prop] = req.body[prop];
            }

            produto.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Produto atualizado!' });
            });

        });
    })

    .get(function (req, res) {
        Produto.findOne({ _id: req.params.id }, function (err, produto) {
            if (err)
                res.send(err);

            res.json(produto);
        });
    })

    .delete(function (req, res) {
        Produto.remove({
            _id: req.params.id
        }, function (err, produto) {
            if (err)
                res.send(err);

            res.json({ message: 'Deletado OK' });
        });
    });

module.exports = router;

