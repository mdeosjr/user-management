export class Address {
	street: string;
	number: string;
	neighbourhood: string;
	city: string;
	uf: string;
	cep: string;

	constructor(
		street: string,
		number: string,
		neighbourhood: string,
		city: string,
		uf: string,
		cep: string
	) {
		this.street = street;
		this.number = number;
		this.neighbourhood = neighbourhood;
		this.city = city;
		this.uf = uf;
		this.cep = cep;
	}
}
