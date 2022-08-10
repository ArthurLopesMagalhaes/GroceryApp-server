import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const notAuthorizedJson = { status: 401, message: "Não autorizado" };

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

passport.use(
  new JWTStrategy(options, async (payload, done) => {
    const user = await prisma.users.findUnique({ where: { email: payload } });
    if (user) {
      return done(null, user);
    } else {
      return done(notAuthorizedJson, false);
    }
  })
);

export const generateToken = (data: string) => {
  return jwt.sign(data, process.env.JWT_SECRET as string);
};

export const privateRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("jwt", (err, user) => {
    req.user = user;
    return user ? next() : next(notAuthorizedJson);
  })(req, res, next);
};

export default passport;
