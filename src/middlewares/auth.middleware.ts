import { FastifyRequest, FastifyReply } from "fastify";

/**
 * FastifyReply is an instance of the standard http or http2 reply types.
 * It defaults to http.ServerResponse, and it also extends the relative reply object.
 * 
 * FastifyRequest is an instance of the standard http or http2 request objects.
 * It defaults to http.IncomingMessage, and it also extends the relative request object.
 */
export const verifyToken = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    /** 
    * The jwtVerify method will verify the token and decode the payload,
    * attaching it to the request object. If the token is invalid or missing,
    * it will throw an error. 
    */
    await req.jwtVerify();
  } catch (err) {
    reply.status(401).send({ message: "Unauthorized" });
  }
};