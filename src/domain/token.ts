import { userRepository } from "@infra/userRepository";
import { addressRepository } from "@infra/addressRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class Token {
	email: string;
	password: string;

	constructor(email: string, password: string) {
		this.validate(email, password);
		this.email = email;
		this.password = password;
	}

	async validate(email: string, password: string) {
		const user = await userRepository.get(email);

		if (!user) throw new Error("User not found!");

		const address = await addressRepository.get(user.addressId);

		if (bcrypt.compareSync(password, user.password)) {
			const data = { userId: user.id };
			const secretKey = process.env.JWT_SECRET as string;
			const config = { expiresIn: 60 * 60 };

			const token = jwt.sign(data, secretKey, config);
			return { token, name: user.name, address };
		} else {
			throw new Error("User or password mismatch!");
		}
	}
}
