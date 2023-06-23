import { User } from "@domain/user";
import { Auth } from "@domain/auth";

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

interface UpdatedInfo {
	user?: UserData;
	address?: AddressData;
}

async function create(userData: UserData, addressData: AddressData) {
	const { name, email, password, age } = userData;

	const user = new User(name, email, password, age, addressData);
	await user.save();
}

async function update(updatedInfo: UpdatedInfo, token: string) {
	const auth = new Auth();
	auth.validate(token)

	const { address, user } = updatedInfo;
}

export const userService = {
	create,
	update,
};
