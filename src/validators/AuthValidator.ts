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
