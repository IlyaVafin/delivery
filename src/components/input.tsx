import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>
const Input = ({ ...rest }: InputProps) => {
	return (
		<input
			{...rest}
			className='border border-px border-input rounded-full pt-2 pb-2 pr-4 pl-4 text-2xl w-full outline-none shadow-input text-primary'
		/>
	)
}

export default Input
