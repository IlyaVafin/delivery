import { cva } from "class-variance-authority"
import React, { ReactNode } from "react"

const buttonVariants = cva(
	"border-none rounded-full leading-[21px] text-[14px] w-full pt-[15.5px] pb-[15.5px] font-medium",
	{
		variants: {
			variant: {
				black: "bg-primary text-primary-foreground",
				gray: "bg-secondary text-primary",
			},
		},
	},
)

export interface ButtonProps extends Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"disabled"
> {
	children: ReactNode
	variant: "black" | "gray"
	disabled?: boolean
	className?: string
}

const Button = ({ children, variant, disabled, className }: ButtonProps) => {
	return (
		<button
			disabled={disabled ?? false}
			className={`${buttonVariants({ variant })} ${className ?? ""}`}
		>
			{children}
		</button>
	)
}

export default Button
