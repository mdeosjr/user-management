import { prisma } from "@infra/database";
import { UserData } from "@domain/types";

async function create(userData: UserData) {
	const { name, email, password, age, address } = userData;
	const { cep, city, neighborhood, number, street, uf } = address;

	return await prisma.user.create({
		data: {
			name,
			email,
			password,
			age: Number(age),
			address: {
				create: {
					cep,
					city,
					neighborhood,
					number,
					street,
					uf,
				},
			},
		},
	});
}

async function get(email: string) {
	return await prisma.user.findUnique({
		where: { email },
		include: { address: true },
	});
}

async function update(data: UserData) {
	const { address, ...user } = data;

	return await prisma.user.update({
		where: { email: user.email },
		data: {
			name: user.name,
			email: user.email,
			password: user.password,
			age: user.age,
			address: {
				update: address,
			},
		},
	});
}

export const userRepository = {
	create,
	get,
	update,
};
