import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";


export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password, name } = req.body as {
    email: string;
    password: string;
    name?: string;
  };

  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return reply.status(400).send({ message: "User already exists" });
  }

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

    //   return user.email,user.name,user.id;
    return {
    id: user.id,
    email: user.email,
    name: user.name
    };
};


export const login = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return reply.status(401).send({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return reply.status(401).send({ message: "Invalid credentials" });
  }

  const token = await reply.jwtSign({
    id: user.id,
    email: user.email,
  });

  return { token };
};