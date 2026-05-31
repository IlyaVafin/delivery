import { ElementType, HTMLAttributes, ReactNode } from "react"

interface CardProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
	className?: string
	rounded?: "lg" | "sm"
	as?: ElementType
}

const Card = ({
	children,
	className,
	rounded = "sm",
	as: Component = "div",
	...rest
}: CardProps) => {
	return (
		<Component
			{...rest}
			className={`border border-px border-primary ${className ?? ""} ${rounded === "lg" ? "rounded-full" : "rounded-3xl"}`}
		>
			{children}
		</Component>
	)
}

export default Card
