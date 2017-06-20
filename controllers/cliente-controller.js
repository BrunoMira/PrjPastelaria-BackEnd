
var Cliente = require('../models/cliente-model');
var express = require('express');

//configure routes

var router = express.Router();

router.route('/clientes')
    .get(function (req, res) {
        Cliente.find(function (err, clientes) {
            if (err)
                res.send(err);
            res.json(clientes);
        });
    });

router.route('/cliente')
    .post(function (req, res) {
        var cliente = new Cliente(req.body);
        cliente.save(function (err) {
            if (err)
                res.send(err);
            res.send({ message: 'Cliente Adicionado' });
        });
    });

router.route('/cliente/:cpf')
    .get(function (req, res) {
        var cliente = new Cliente(req.body);
        cliente = Cliente.findOne({ cpf: req.params.cpf }, function (err, e) {
            if (err) {
                res.send(err)
            }
            res.send(e);
        })

    });

router.route('/cliente/:id')
    .put(function (req, res) {
        Cliente.findOne({ _id: req.params.id }, function (err, cliente) {

            if (err)
                res.send(err);

            for (prop in req.body) {
                cliente[prop] = req.body[prop];
            }

            cliente.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Cliente atualizado!' });
            });

        });
    })

    .get(function (req, res) {
        Cliente.findOne({ _id: req.params.id }, function (err, cliente) {
            if (err)
                res.send(err);

            res.json(cliente);
        });
    })

    .delete(function (req, res) {
        Cliente.remove({
            _id: req.params.id
        }, function (err, cliente) {
            if (err)
                res.send(err);

            res.json({ message: 'Deletado OK' });
        });
    });

module.exports = router;

