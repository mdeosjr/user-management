import { Request, Response } from "express";
import { userService } from "@services/userService";

export async function createUser(req: Request, res: Response) {
	const { address, ...user } = req.body;

	await userService.create(user, address);
	res.sendStatus(201);
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