const mongoose = require("../database");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  senha: {
    type: String,
  },
  imagem: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

UsuarioSchema.pre("save", async function (next) {
  if (this.senha) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
  }
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
