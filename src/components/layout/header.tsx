import logo from "@/assets/logo.svg"
import { History, LogOut, User } from "lucide-react"
import { Link } from "react-router"
import Button from "../button"
import Card from "../card"
const Header = () => {
	return (
		<header>
			<Card rounded="lg" className='flex items-center justify-between p-3'>
				<div>
					<Link to='/'>
						<img src={logo} alt='логотип сервиса доставки' />
					</Link>
				</div>
				<div className='flex items-center gap-6 w-full justify-end'>
					<nav className="flex gap-4">
						<Link
							className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center p-2'
							to='/'
						>
							<History width={20} height={20} />
						</Link>
						<Link
							className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center p-2'
							to='/'
						>
							<User width={20} height={20} />
						</Link>
					</nav>
					<Button
						className='flex items-center w-full max-w-28.75 justify-center gap-2 max-h-10'
						variant='black'
					>
						Выйти <LogOut width={16} height={16} />
					</Button>
				</div>
			</Card>
		</header>
	)
}

export default Header
