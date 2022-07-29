import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
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
      return { token, email };
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
  let profile_photo = "default.png";

  if (file) {
    const randUuid = uuidv4();
    const imageUrl = `http://localhost:5000/media/${randUuid}.jpg`;
    await sharp(file.buffer)
      .resize(500, 500)
      .toFormat("jpg")
      .toFile(`./public/media/${randUuid}.jpg`);
    profile_photo = imageUrl;
  }

  try {
    const newUser = await prisma.users.create({
      data: {
        birth_date: new Date(data.birth_date),
        email: data.email,
        full_name: data.full_name,
        gender: data.gender,
        nickname: data.nickname,
        phone_number: data.phone_number,
        profile_photo,
        password_hash,
        token,
      },
    });
    return newUser;
  } catch (error) {
    return new Error("Something went wrong");
  }
};
