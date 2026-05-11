import { ChevronDown } from "lucide-react"
import { ComponentProps, ReactNode } from "react"
import { DropdownMenuTrigger } from "./dropdown-menu"

const DropdownTriggerWrapper = ({
	children,
	className,
	...rest
}: {
	children: ReactNode
	className?: string
} & ComponentProps<typeof DropdownMenuTrigger>) => {
	return (
		<DropdownMenuTrigger
			className={`flex items-center justify-between border border-px border-input rounded-full pt-3.5 pb-3.5 pr-3 pl-3 max-h-13 w-full ${className ?? ""}`}
			{...rest}
		>
			{children}
			<ChevronDown width={20} height={20} className='text-input' />
		</DropdownMenuTrigger>
	)
}

export default DropdownTriggerWrapper
