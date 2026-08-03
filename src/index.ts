// // Require the framework and instantiate it

// // ESM
// import Fastify from 'fastify'

// const fastify = Fastify({
//   logger: true
// })

// // Declare a route
// fastify.get('/', function (request, reply) {
//   reply.send({ hello: 'world' })
// })

// // Run the server!
// fastify.listen({ port: 3000 }, function (err, address) {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
//   // Server is now listening on ${address}
// })


// ESM
import Fastify from "fastify";
import "dotenv/config";
import {productRoutes} from "./routes/product.routes";
import { customerRoutes } from "./routes/customer.routes";
import orderRoutes from "./routes/order.routes";
import jwt from "@fastify/jwt";
import { authRoutes } from "./routes/auth.routes";

// const app = Fastify({
//   logger: true,
// });

const app = Fastify();

app.register(jwt, {
  secret: process.env.JWT_SECRET!,
});

app.register(authRoutes);
app.register(productRoutes,);
app.register(customerRoutes);
app.register(orderRoutes);
app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});

//------------------------------------------------------------------------

// const fastify = Fastify({
//   logger: true
// })

// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

/**
 * Run the server!
 */
// const start = async () => {
//   try {
//     await fastify.listen({ port: 3000 })
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// }
// start()