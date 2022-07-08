import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../config/passport";

const prisma = new PrismaClient();

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({ where: { email } });
  if (user) {
    const match = email === user.email; //await bcrypt.compare(password, user?.password_hash);
    if (match) {
      const token = generateToken(email);
      user.token = token;
      return { user };
    }
  } else {
    return new Error("Email e/ou senha inválidos");
  }
};
