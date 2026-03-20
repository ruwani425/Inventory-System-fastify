import { prisma } from "../config/prisma";


export const getproducts = async () => {
//   const products = await prisma.product.findMany();
//   return products;
    return await prisma.product.findMany();
}

export const getproductById = async (id: string) => {
    //   const product = await prisma.product.findUnique({ where: { id } });
    //   return product;
    return await prisma.product.findUnique({ where: { id } });
}

export const createproduct = async (name: string ,quantity: number, price: number) => {
//   const product = await prisma.product.create({ data: { name, quantity, price } });
//   return product;
    return await prisma.product.create({ data: { name, quantity, price } });
}

export const updateproduct = async (id: string, name: string ,quantity: number, price: number) => {
//   const product = await prisma.product.update({ where: { id }, data: { name, quantity, price } });
//   return product;
    return await prisma.product.update({ where: { id }, data: { name, quantity, price } });
}

export const deleteproduct = async (id : string) => {
  //   const product = await prisma.product.delete({ where: { id } });
  //   return product;
  return await prisma.product.delete({ where: { id } });
}