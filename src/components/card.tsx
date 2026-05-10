import { ReactNode } from "react"

const Card = ({
	children,
	className,
	rounded = "sm",
}: {
	children: ReactNode
	className?: string
	rounded?: "lg" | "sm"
}) => {
	return (
		<div
			className={`border border-px border-primary ${className ?? ""} ${rounded === "lg" ? "rounded-full" : "rounded-3xl"}`}
		>
			{children}
		</div>
	)
}

export default Card
