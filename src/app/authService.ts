import { Auth } from "@domain/auth";

export interface LoginData {
	email: string;
	password: string;
}

async function login(loginData: LoginData) {
	const { email, password } = loginData;

	const auth = new Auth(email, password);

	const token = await auth.verifyUser(email, password);
	return token;
}

export const authService = {
	login,
};
