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
import { PrismaClient } from "../config/prisma";

const prisma = new PrismaClient();
const app = Fastify();

app.get("/products", async (req, reply) => {
  const products = await prisma.product.findMany();
  return products;
});

app.post("/products", async (req, reply) => {
  const { name, quantity, price } = req.body as { name: string; quantity: number; price: number };
  const product = await prisma.product.create({ data: { name, quantity, price } });
  return product;
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});

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