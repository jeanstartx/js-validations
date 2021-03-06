import {types as type} from './types';

const verify = (rest: number) => rest == 10 || rest == 11;
const modRest = (sum: number) => (sum * 10) % 11;

const cpf = (str: string) => {
	if (!type.string(str)) return false;
	const cpf = str
		.replace(/-/g, '')
		.replace(/\./g, '')
		.replace('/ /g', '');
	let checkSum = 0;
	let rest;
	for (let i: number = 1; i <= 9; i++)
		checkSum = checkSum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
	rest = modRest(checkSum);
	if (verify(rest)) rest = 0;
	if (rest != parseInt(cpf.substring(9, 10))) return false;
	checkSum = 0;
	for (let i: number = 1; i <= 10; i++)
		checkSum = checkSum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
	rest = modRest(checkSum);
	if (verify(rest)) rest = 0;
	return rest != parseInt(cpf.substring(10, 11)) ? false : true;
};

export default cpf;
