import { Control, Controller } from 'react-hook-form';
import Input from '../Input';

import { ControlledInputProps } from '@types';

import { Error } from './style';

const ControlledInput = ({
	control,
	name,
	error,
	...rest
}: ControlledInputProps) => {
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input onChangeText={onChange} value={value} {...rest} />
				)}
			/>

			{error && <Error>{error.message}</Error>}
		</>
	);
};

export default ControlledInput;
