import { prisma } from "@infra/database";

async function get(id: number) {
	return await prisma.address.findUnique({ where: { id } });
}

export const addressRepository = {
	get,
};
