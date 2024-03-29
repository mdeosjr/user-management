import { User } from "@domain/user";
import { Auth } from "@domain/auth";
import { UserData, AddressData } from "@domain/types";
import bcrypt from "bcrypt";
import { userRepository } from "@infra/userRepository";

async function createUser(userData: UserData, addressData: AddressData) {
	const { name, email, password, age } = userData;

	const hashPassword = bcrypt.hashSync(password, 8);

	const user = new User(name, email, age, addressData, hashPassword);
	await user.save();
}

async function getUser(token: string) {
	const auth = new Auth();
	const user = await auth.validate(token);

	return user;
}

async function updateUser(updatedUser: UserData, token: string) {
	const auth = new Auth();
	await auth.validate(token);

	const existentUser = await userRepository.get(updatedUser.email);

	if (!existentUser)
		throw { type: "conflict", message: "You cant update this user!" };

	const { address, ...user } = existentUser;

	const newUser = new User(
		updatedUser.name,
		user.email,
		updatedUser.age,
		address,
		user.password
	);

	newUser.update();
}

async function updateAddress(updatedAddress: UserData, token: string) {
	const auth = new Auth();
	const { email } = await auth.validate(token);

	const existentUser = await userRepository.get(email);

	if (!existentUser) throw { type: "unauthorized", message: "User not found!" };

	const { address, ...user } = existentUser;

	const newUser = new User(
		user.name,
		user.email,
		user.age,
		updatedAddress.address,
		user.password
	);

	newUser.update();
}

export const userService = {
	createUser,
	getUser,
	updateUser,
	updateAddress,
};
