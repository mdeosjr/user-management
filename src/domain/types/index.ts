export interface UserData {
	name: string;
	email: string;
	password: string;
	age: number;
	address: AddressData;
}

export interface AddressData {
	street: string;
	number: string;
	neighborhood: string;
	city: string;
	uf: string;
	cep: string;
}