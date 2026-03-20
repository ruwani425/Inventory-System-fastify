import { FastifyInstance } from "fastify";
import { placeorder } from "../controllers/order.controller";

export const orderRoutes = async (app: FastifyInstance) => {
  app.post("/orders", async (req, reply) => {
    const { customerId, productId, quantity } = req.body as {   customerId: string; productId: string; quantity: number };
    try {
      return await placeorder(customerId, productId, quantity); 
    } catch (error) {
      reply.status(400).send({ error: (error as Error).message });
    }
    });
};

export default orderRoutes;