import { FastifyInstance } from "fastify";
import { verifyToken } from "../middlewares/auth.middleware";
import { createproduct, deleteproduct, getproductById, getproducts, updateproduct } from "../controllers/product.controller";

export const productRoutes = async (app: FastifyInstance) => {
  app.get("/products",{ preHandler: [verifyToken] }, async (req, reply) => {
    // const products = await getproducts();
    return await getproducts();
  });

  //preHandler is used to specify a middleware function that will be 
  // executed before the route handler. In this case, the verifyToken middleware is used to check 
  // if the incoming request has a valid JWT token before allowing access to the route. If the token is valid, 
  // the request will proceed to the route handler; otherwise, it will be rejected with an appropriate error response.
  app.get("/products/:id", { preHandler: [verifyToken] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    // const product = await getproductById(id);
    return await getproductById(id);
  });

  app.post("/products", { preHandler: [verifyToken] }, async (req, reply) => {
    const { name, quantity, price } = req.body as { name: string; quantity: number; price: number };
    // const product = await createproduct({ name, quantity, price });
    return await createproduct(name, quantity, price);
  });

  app.put("/products/:id", { preHandler: [verifyToken] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const { name, quantity, price } = req.body as { name: string; quantity: number; price: number };
    // const product = await updateproduct(id, { name, quantity, price });
    return await updateproduct(id,name, quantity, price);
  });

  app.delete("/products/:id", { preHandler: [verifyToken] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    // const product = await deleteproduct(id);
    return await deleteproduct(id);
  });
};

export default productRoutes;