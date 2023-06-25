import express, { json } from "express";
import "./setup";
import "express-async-errors";
import cors from "cors";
import router from "./routes";
import errorHandler from "@middlewares/errors/errorHandler";

const server = express();

server.use(cors());
server.use(json());
server.use(router);
server.use(errorHandler);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
});

export default server;
