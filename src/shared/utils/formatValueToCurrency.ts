export const formatValueToCurrency = (value: string) => {
	const number = Number(value);

	const price = number.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});

	return price;
};
