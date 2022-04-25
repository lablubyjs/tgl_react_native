import ButtonNumber from '../../UI/Buttons/ButtonNumber';

import { GamesNumbersProps } from '@shared/types';

import { GamesNumbersContainer, GamesNumbersList } from './styles';

const GamesNumbers = ({
	range,
	gameColor,
	numbers,
	onAddNumber,
	onRemoveNumber,
}: GamesNumbersProps): JSX.Element => {
	return (
		<GamesNumbersContainer>
			<GamesNumbersList>
				{Array.from({ length: range }).map((_, index) => {
					let backgroundColor = '';
					const number = index + 1;

					numbers.indexOf(number) !== -1
						? (backgroundColor = gameColor)
						: (backgroundColor = '');

					const onPressButtonNumberHandler = () => {
						if (numbers.indexOf(number) === -1) {
							onAddNumber(number);
						} else {
							onRemoveNumber(number);
						}
					};

					return (
						<ButtonNumber
							key={number}
							onPressHandler={onPressButtonNumberHandler}
							text={index < 9 ? `0${number}` : `${number}`}
							color={backgroundColor}
						/>
					);
				})}
			</GamesNumbersList>
		</GamesNumbersContainer>
	);
};

export default GamesNumbers;
