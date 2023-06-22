import { User } from "@domain/user";

export interface UserData {
	name: string;
	email: string;
	password: string;
	age: number;
}

export interface AddressData {
	street: string;
	number: string;
	neighbourhood: string;
	city: string;
	uf: string;
	cep: string;
}

async function create(userData: UserData, addressData: AddressData) {
	const { name, email, password, age } = userData;

	const user = new User(name, email, password, age, addressData);
	await user.save();
}

export const userService = {
	create,
};
