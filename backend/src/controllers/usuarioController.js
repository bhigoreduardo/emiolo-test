require("dotenv").config();
const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Usuario = require("../models/usuario");

function generateToken(params = {}) {
  const SECRET = process.env.SECRET;

  return jwt.sign(params, SECRET, { expiresIn: 86400 });
}

function checkToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "Token não encontrado." });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token inválido." });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token mal formatado." });
  }

  const SECRET = process.env.SECRET;

  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) return res.status(401).send({ error: "Token inválido." });

    next();
  });
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
      }),
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

router.post(
  "/autenticacao",
  [
    body("email")
      .isEmail()
      .withMessage("O campo e-mail deve ser em formato de e-mail válido.")
      .custom(async (value, { req }) => {
        if (!value) {
          return Promise.reject("O campo e-mail é obrigatório.");
        }

        const usuario = await Usuario.findOne({ email: value });
        if (!usuario) {
          return Promise.reject("Usuário com e-mail informado não está cadastrado.");
        }
      }),
    body("senha").custom(async (value, { req }) => {
      if (!req.body.googleId) {
        const { email } = req.body;

        const usuario = await Usuario.findOne({ email: email }).select("+senha");

        if (!value) {
          return Promise.reject("Senha do usuário é um campo obrigatório.");
        }

        if (!(await bcrypt.compare(value, usuario.senha))) {
          return Promise.reject("Senha informada está incorreta.");
        }
      }
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send(errors);
    }

    const { email } = req.body;

    const usuario = await Usuario.findOne({ email: email });

    return res.status(200).send({ usuario, token: generateToken({ id: usuario._id }) });
  }
);

router.get("/registros", checkToken, async (req, res) => {
  try {
    const usuarios = await Usuario.find({});

    res.status(200).send({ usuarios });
  } catch (error) {
    return res.status(500).send({ error: "Erro interno no servidor, tente novamente." });
  }
});

module.exports = (app) => app.use("/auth", router);
