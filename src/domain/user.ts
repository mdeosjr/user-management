import { AddressData, UserData } from "@services/userService";
import { userRepository } from "@infra/userRepository";
import bcrypt from "bcrypt";

export class User {
	name: string;
	email: string;
	password: string;
	age: number;
	address: AddressData;

	constructor(
		name: string,
		email: string,
		password: string,
		age: number,
		address: AddressData
	) {
		this.validateAge(age);
		this.name = name;
		this.email = email;
		this.password = password;
		this.age = age;
		this.address = address;
	}

	validateAge(age: number): void {
		if (age < 18) {
			throw new Error("You must be at least 18");
		}
	}

	userObject(): UserData {
		return {
			name: this.name,
			email: this.email,
			password: this.password,
			age: this.age,
		};
	}

	async save(): Promise<void> {
		const user = this.userObject();

		const existentUser = await userRepository.get(user.email);
		if (existentUser) throw new Error("User already exists!");

		const hashPassword = bcrypt.hashSync(user.password, 8);

		await userRepository.create(
			{ ...user, password: hashPassword },
			this.address
		);
	}
}
