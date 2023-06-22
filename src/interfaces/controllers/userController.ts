import { Request, Response } from "express";
import { userService } from "@services/userService";

export async function createUser(req: Request, res: Response) {
	const { address, ...user } = req.body;

	await userService.create(user, address);
	res.sendStatus(201);
}
