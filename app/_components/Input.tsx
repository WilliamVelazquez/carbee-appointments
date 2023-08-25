import { ChangeEvent } from "react";

function Input({ id, type, label, required, disabled, placeholder, onChange }: InputProps) {
	return <div>
		{label &&
			<label 
				htmlFor={id}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{label}
			</label>
		}
		<input
			id={id}
			name={id}
			autoComplete="off"
			onChange={onChange}
			type={type || "text"}
			className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder={placeholder}
			required={required || false}
			disabled={disabled || false}
		/>
	</div>;
}

interface InputProps {
	id?: string,
	type?: 'text' | 'number' | 'email' | 'password',
	label?: string,
	required?: boolean,
	disabled?: boolean,
	placeholder?: string,
	value?: string | number,
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default Input;
