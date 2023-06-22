import express, { json } from "express";
import cors from "cors";
import router from "./routes";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(cors());
server.use(json());
server.use(router);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
});

export default server;