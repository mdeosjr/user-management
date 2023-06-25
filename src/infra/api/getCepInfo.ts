import axios from "axios";

export default async function getCepInfo(cep: string) {
	try {
		const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

		return address.data;
	} catch (e) {
		throw { type: "bad_request", message: "Something went wrong!" };
	}
}
