import getCepInfo from "@infra/api/getCepInfo";
export class Address {
	street: string;
	number: string;
	neighborhood: string;
	city: string;
	uf: string;
	cep: string;

	constructor(
		street: string,
		number: string,
		neighborhood: string,
		city: string,
		uf: string,
		cep: string
	) {
		this.validateCep(cep);
		this.street = street;
		this.number = number;
		this.neighborhood = neighborhood;
		this.city = city;
		this.uf = uf;
		this.cep = cep;
	}

	async validateCep(cep: string): Promise<void> {
		if (!cep) throw { type: "bad_request", message: "CEP missing!" };

		const address = await getCepInfo(cep);
		if (address.erro) throw { type: "conflict", message: "Address not found!" };

		if (address.uf !== "AM")
			throw { type: "conflict", message: "You are outside the AM state!" };
	}
}
