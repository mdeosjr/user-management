export interface UserData {
	name: string;
	email: string;
	password: string;
	age: number;
}

export interface AddressData {
	street: string;
	number: string;
	neighbourhood: string;
	city: string;
	uf: string;
	cep: string;
}

export interface UpdatedInfo {
	user?: UserData;
	address?: AddressData;
}
