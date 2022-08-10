import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "../config/cloudinary";

import { generateToken } from "../config/passport";
import { singUpProps } from "../controllers/authController";

const prisma = new PrismaClient();

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({ where: { email } });
  if (user) {
    const match = await bcrypt.compare(password, user?.password_hash);
    if (match) {
      const token = generateToken(email);
      user.token = token;
      return user;
    } else {
      return new Error("Email e/ou senha inválidos");
    }
  } else {
    return new Error("Email e/ou senha inválidos");
  }
};

export const createUser = async (
  data: singUpProps,
  file?: Express.Multer.File
) => {
  const { email } = data;
  const hasUser = await prisma.users.findUnique({ where: { email } });
  if (hasUser) {
    return new Error("User already exists");
  }

  const password_hash = bcrypt.hashSync(data.password, 10);
  const token = generateToken(data.email);

  console.log(data);

  if (file) {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        public_id: `GroceryApp/users/${uuidv4()}`,
      });
      const newUser = await prisma.users.create({
        data: {
          birth_date: new Date(data.birth_date),
          email: data.email,
          full_name: data.full_name,
          gender: data.gender,
          nickname: data.nickname,
          phone_number: data.phone_number,
          profile_photo: result.secure_url,
          password_hash,
          token,
        },
      });
      return newUser;
    } catch (error) {
      return new Error();
    }
  } else {
    const newUser = await prisma.users.create({
      data: {
        birth_date: new Date(data.birth_date),
        email: data.email,
        full_name: data.full_name,
        gender: data.gender,
        nickname: data.nickname,
        phone_number: data.phone_number,
        profile_photo: "default.png",
        password_hash,
        token,
      },
    });
    return newUser;
  }
};
