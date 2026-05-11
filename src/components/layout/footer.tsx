import { Calculator, History, User } from "lucide-react"
import { Link, useLocation } from "react-router"
import Card from "../card"
import Typography from "../typography"
const tabs = [
	{ icon: <Calculator />, label: "Расчёт", href: "/" },
	{ icon: <History />, label: "История", href: "/history" },
	{ icon: <User />, label: "Профиль", href: "/profile" },
]
const Footer = () => {
	const { pathname } = useLocation()
	return (
		<Card className='flex p-0.5 justify-between' rounded='lg'>
			{tabs.map(tab => (
				<Link
					to={tab.href}
					key={tab.label}
					className={`max-w-26 w-full flex items-center justify-center flex-col rounded-full gap-0.5 pt-2 pb-2 ${pathname === tab.href ? "bg-green-500 text-primary-foreground " : ""}`}
				>
					{tab.icon}
					<Typography
						className={`font-semibold ${pathname === tab.href ? "bg-green-500 text-primary-foreground " : ""}`}
						variant='hint'
						as='span'
					>
						{tab.label}
					</Typography>
				</Link>
			))}
		</Card>
	)
}

export default Footer
