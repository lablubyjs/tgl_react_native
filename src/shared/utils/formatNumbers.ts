export const formatNumbers = (value: string) => {
	const numbers = value.split(',');

	const arrayNumbers = numbers.map((item) => {
		const number = parseFloat(item);
		return number < 10 ? `0${number}` : number;
	});

	return arrayNumbers.join(', ');
};
