// import "dotenv/config";
// import { PrismaClient } from "../../generated/prisma/client";

// const prisma = new PrismaClient();
// export { PrismaClient };
// export { prisma };

import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

export { PrismaClient, prisma };