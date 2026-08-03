import { prisma } from "../config/prisma";

export const placeorder = async (
  customerId: string,
  productId: string,
  quantity: number
) => {
  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
  });

  if (!customer) {
    throw new Error("Customer not found");
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  if (product.quantity < quantity) {
    throw new Error("Insufficient product quantity");
  }

  const totalPrice = product.price * quantity;

  await prisma.product.update({
    where: { id: productId },
    data: {
      quantity: product.quantity - quantity,
    },
  });

  const order = await prisma.order.create({
    data: {
      customerId,
      totalAmount: totalPrice,
    },
  });

  await prisma.orderProduct.create({
    data: {
      orderId: order.id,
      productId,
      quantity,
      price: product.price,
    },
  });

  return {
    message: "Order placed successfully",
    orderId: order.id,
    totalAmount: totalPrice,
  };
};