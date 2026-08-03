import { FastifyInstance } from "fastify";
import { createcustomer, deletecustomer, getcustomerById, getcustomers, updatecustomer } from "../controllers/customer.controller";

export const customerRoutes = async (app: FastifyInstance) => {
  app.get("/customers", async (req, reply) => {
    // req.log.info('Request received');
    return await getcustomers();
  });

  app.get("/customers/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    return await getcustomerById(id);
  });

  app.post("/customers", async (req, reply) => {
    const { name, email } = req.body as { name: string; email: string };
    return await createcustomer(name, email);
  });

  app.put("/customers/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    const { name, email } = req.body as { name: string; email: string };
    return await updatecustomer(id, name, email);
  });

  app.delete("/customers/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    return await deletecustomer(id);
  });
};
