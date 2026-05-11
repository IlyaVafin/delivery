import { ElementType, ReactNode } from "react"

const Card = ({
	children,
	className,
	rounded = "sm",
	as: Component = "div",
}: {
	children: ReactNode
	className?: string
	rounded?: "lg" | "sm"
	as?: ElementType
}) => {
	return (
		<Component
			className={`border border-px border-primary ${className ?? ""} ${rounded === "lg" ? "rounded-full" : "rounded-3xl"}`}
		>
			{children}
		</Component>
	)
}

export default Card
