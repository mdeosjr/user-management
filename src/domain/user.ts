import { AddressData } from "@domain/types";
import { userRepository } from "@infra/userRepository";
import { Address } from "./address";

export class User {
	name: string;
	email: string;
	password: string;
	age: number;
	address: Address;

	constructor(
		name: string,
		email: string,
		age: number,
		address: AddressData,
		password: string
	) {
		this.validateAge(age);
		this.name = name;
		this.email = email;
		this.password = password;
		this.age = age;
		this.address = new Address(
			address.street,
			address.number,
			address.neighborhood,
			address.city,
			address.uf,
			address.cep
		);
	}

	validateAge(age: number): void {
		if (age < 18)
			throw { type: "conflict", message: "You must be at least 18!" };
	}

	async save(): Promise<void> {
		const existentUser = await userRepository.get(this.email);
		if (existentUser)
			throw { type: "conflict", message: "User already exists!" };

		await userRepository.create(this);
	}

	async update() {
		await userRepository.update(this);
	}
}
