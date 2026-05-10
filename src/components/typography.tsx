import { cva } from "class-variance-authority"
import { HTMLAttributes, ReactNode } from "react"
type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
	as: Tags
	variant: "head" | "body" | "subhead" | "subbody" | "hint"
	className?: string
	surface?: boolean
}

const typography = cva("tracking-[0.5%] text-primary", {
	variants: {
		variant: {
			head: "text-2xl font-bold leading-8",
			body: "text-[16px] leading-6 font-medium",
			subhead: "text-[18px] leading-[26px] font-normal",
			subbody: "text-[14px] font-medium leading-[22px]",
			hint: "text-[12px] font-normal leading-4",
		},
		surface: {
			false: null,
			true: "text-surface",
		},
	},
})

const Typography = ({
	as: Component = "p",
	children,
	variant,
	className,
	surface = false,
	...rest
}: TypographyProps) => {
	return (
		<Component
			{...rest}
			className={`${typography({ variant, surface })} ${className ?? ""}`}
		>
			{children}
		</Component>
	)
}

export default Typography
