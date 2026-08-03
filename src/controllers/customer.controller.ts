import {prisma} from "../config/prisma";

export const getcustomers = async () => {
    return await prisma.customer.findMany();
}

export const getcustomerById = async (id: string) => {
    return await prisma.customer.findUnique({ where: { id } });
}

export const createcustomer = async (name: string ,email: string) => {
    return await prisma.customer.create({ data: { name, email } });
}

export const updatecustomer = async (id: string, name: string ,email: string) => {
    return await prisma.customer.update({ where: { id }, data: { name, email } });
}

export const deletecustomer = async (id : string) => {
    return await prisma.customer.delete({ where: { id } });
}
