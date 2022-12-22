require('dotenv').config();
const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

function generateToken(params = {}) {
    const SECRET = process.env.SECRET;
  
    return jwt.sign(params, SECRET, { expiresIn: 86400 });
  }

router.post(
    "/cadastro",
    [
      body("nome").isLength({ min: 5 }).withMessage("O campo nome é obrigatório possuir no mínimo 5 caracteres."),
      body("sobrenome").isLength({ min: 5 }).withMessage("O campo sobrenome é obrigatório possuir no mínimo 5 caracteres."),
      body("email")
        .isEmail()
        .withMessage("O campo e-mail deve ser em formato de e-mail válido.")
        .custom(async (value) => {
          if (!value) {
            return Promise.reject("O campo e-mail é obrigatório.");
          }
  
          const usuario = await Usuario.findOne({ email: value });
          if (usuario) {
            return Promise.reject("Usuário com e-mail informado já cadastrado.");
          }
        })
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send(errors);
      }
  
      try {
        const usuario = await Usuario.create(req.body);
        usuario.senha = undefined;
  
        return res.status(201).send({ usuario, token: generateToken({ id: usuario._id }) });
      } catch (error) {
        return res.status(500).send({ error: "Erro interno no servidor, tente novamente." });
      }
    }
  );

module.exports = router;