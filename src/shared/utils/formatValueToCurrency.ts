export const formatValueToCurrency = (value: number) => {
	const price = value
		.toFixed(2)
		.replace('.', ',')
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

	return `R$ ${price}`;
};
