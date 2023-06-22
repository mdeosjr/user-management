import { prisma } from "@infra/database";
import { Address } from "@prisma/client";
import { UserData, AddressData } from "@services/userService";

async function create(userData: UserData, addressData: AddressData) {
	const { name, email, password, age } = userData;
	const { number, cep } = addressData;

	const address: Address | null = await prisma.address.findFirst({
		where: { cep, number },
	});

	return await prisma.user.create({
		data: {
			name,
			email,
			password,
			age,
			address: {
				connectOrCreate: {
					where: { id: address?.id || 0 },
					create: addressData,
				},
			},
		},
	});
}

export const userRepository = {
	create,
};
