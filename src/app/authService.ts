import { Token } from "@domain/token";

export interface LoginData {
	email: string;
	password: string;
}

async function login(loginData: LoginData) {
	const { email, password } = loginData;

	const token = new Token(email, password);
  return token;
}

export const authService = {
	login,
};
