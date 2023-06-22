import { UserData } from "@services/userService";
import joi from "joi";

const userDataSchema = joi.object<UserData>({
	name: joi.string().required(),
	email: joi.string().required(),
	password: joi.string().required(),
});

export default userDataSchema;
