import { Request, Response } from "express";
import { userService } from "@services/userService";

export async function createUser(req: Request, res: Response) {
	const { address, ...user } = req.body;

	await userService.create(user, address);
	res.sendStatus(201);
}

export async function updateUser(req: Request, res: Response) {
	const updatedInfo = req.body;
	const authorization = req.headers.authorization;
	const token = authorization?.replace("Bearer ", "") as string;

  await userService.update(updatedInfo, token);
  res.sendStatus(200);
}