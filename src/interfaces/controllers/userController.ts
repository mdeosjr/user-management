import { Request, Response } from "express";
import { userService } from "@services/userService";

export async function createUser(req: Request, res: Response) {
	const { address, ...user } = req.body;

	await userService.createUser(user, address);
	res.sendStatus(201);
}

export async function getUser(req: Request, res: Response) {
	const authorization = req.headers.authorization;
	const token = authorization?.replace("Bearer ", "") as string;

	const user = await userService.getUser(token);
	const { address, ...userData } = user;
	res.status(200).send({
		name: userData.name,
		email: userData.email,
		age: userData.age,
		address,
	});
}

export async function updateUser(req: Request, res: Response) {
	const updatedUser = req.body;
	const authorization = req.headers.authorization;
	const token = authorization?.replace("Bearer ", "") as string;

	await userService.updateUser(updatedUser, token);
	res.sendStatus(200);
}

export async function updateAddress(req: Request, res: Response) {
	const updatedAddress = req.body;
	const authorization = req.headers.authorization;
	const token = authorization?.replace("Bearer ", "") as string;

	await userService.updateAddress(updatedAddress, token);
	res.sendStatus(200);
}
