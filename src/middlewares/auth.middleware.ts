import { FastifyRequest, FastifyReply } from "fastify";

export const verifyToken = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    await req.jwtVerify();
  } catch (err) {
    reply.status(401).send({ message: "Unauthorized" });
  }
};