import { AddressData, UserData } from "@services/userService";
import { userRepository } from "@infra/userRepository";

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
      age: this.age
		}
	}

	async save(): Promise<void> {
		const user = this.userObject();
		await userRepository.create(user, this.address);
	}
}
