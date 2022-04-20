export const completeArray = (
	array: number[],
	maxNumber: number,
	range: number
) => {
   
	const newArray: number[] = [];

	if (array.length < maxNumber) {
		let toComplete = maxNumber - array.length;

		while (toComplete > 0) {
			const number = Math.floor(Math.random() * range + 1);

			if (!newArray.includes(number) && !array.includes(number)) {
				newArray.push(number);
				toComplete--;
			}
		}
	}

	return newArray;
};
