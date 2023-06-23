import { Request, Response } from "express";
import { authService } from "@services/authService";

export async function login(req: Request, res: Response) {
	const loginData = req.body;

	const token = await authService.login(loginData);
	res.status(200).send(token);
}
