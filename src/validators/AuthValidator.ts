import { checkSchema } from "express-validator";

export const signIn = checkSchema({
  email: {
    isEmail: true,
    normalizeEmail: true,
    errorMessage: "E-mail inválido.",
  },
  password: {
    notEmpty: {
      errorMessage: "Digite sua senha",
    },
  },
});

export const signUp = checkSchema({
  full_name: {
    trim: true,
    isLength: {
      options: { min: 2 },
    },
    errorMessage: "Nome precisa ter pelo menos 2 caracteres.",
  },
  email: {
    isEmail: true,
    normalizeEmail: true,
    errorMessage: "E-mail inválido.",
  },
  password: {
    isLength: {
      options: { min: 8 },
    },
    errorMessage: "Senha precisa ter pelo menos 8 caracteres.",
  },
  nickname: {
    notEmpty: {
      errorMessage: "Preencha o nickname",
    },
  },
  phone_number: {
    isNumeric: true,
    errorMessage: "Preencha o numero de telefone",
  },
  date_birth: {
    toDate: true,
  },
  gender: {
    notEmpty: { errorMessage: "Preencha o genero" },
  },
});
