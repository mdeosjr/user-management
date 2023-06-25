import { AddressData } from "@domain/types";
import { prisma } from "@infra/database";

async function get(id: number) {
	return await prisma.address.findUnique({ where: { id } });
}

async function getByCepAndNumber(cep: string, number: string) {
	return await prisma.address.findFirst({ where: { cep, number } });
}

export const addressRepository = {
	get,
	getByCepAndNumber,
};
