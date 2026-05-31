import ellipse from "@/assets/ellipse.svg"
import handhsake from "@/assets/handshake.png"
import Button from "@/components/button"
import Card from "@/components/card"
import { DropdownMenu } from "@/components/dropdown-menu"
import DropdownTriggerWrapper from "@/components/dropdown-trigger-wrapper"
import Input from "@/components/input"
import Typography from "@/components/typography"
import { api } from "@/shared/api/api"
import { ArrowRight, ChevronRight, X } from "lucide-react"
import { useEffect, useState } from "react"

const Calculation = () => {
	const [showModalWhereTo, setShowModalWhereTo] = useState(false)
	const [showModalSizes, setShowModalSizes] = useState(false)
	return (
		<div className='flex flex-col gap-2'>
			<Card className='p-6 flex flex-col gap-6' rounded='sm' as='form'>
				<Typography variant='head' as='h1'>
					Рассчитать доставку
				</Typography>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-1'>
						<Typography variant='subbody' as='span'>
							Город отправки
						</Typography>
						<DropdownMenu>
							<DropdownTriggerWrapper onClick={() => setShowModalWhereTo(true)}>
								<div className='flex gap-2'>
									<img src={ellipse} width={16} height={16} alt='ellipse' />
									<span className=''>Москва</span>
								</div>
							</DropdownTriggerWrapper>
							<CitiesModal
								showModal={showModalWhereTo}
								onClose={() => setShowModalWhereTo(false)}
							/>
						</DropdownMenu>
						<div className='flex flex-wrap gap-2'>
							<Typography className='underline' as='p' surface variant='body'>
								Санкт-Петербург
							</Typography>
							<Typography className='underline' as='p' surface variant='body'>
								Новосибирск
							</Typography>
							<Typography className='underline' as='p' surface variant='body'>
								Томск
							</Typography>
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<Typography as='span' variant='subbody'>
							Город назначения
						</Typography>
						<DropdownMenu>
							<DropdownTriggerWrapper>
								<div className='flex items-center gap-2'>
									<svg
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM3.36 8C3.36 10.5626 5.4374 12.64 8 12.64C10.5626 12.64 12.64 10.5626 12.64 8C12.64 5.4374 10.5626 3.36 8 3.36C5.4374 3.36 3.36 5.4374 3.36 8Z'
											fill='#0B0B0B'
										/>
									</svg>
									<span>Санкт-Петербург</span>
								</div>
							</DropdownTriggerWrapper>
						</DropdownMenu>
						<div className='flex flex-wrap gap-2'>
							<Typography className='underline' as='p' surface variant='body'>
								Новосибирск
							</Typography>
							<Typography className='underline' as='p' surface variant='body'>
								Томск
							</Typography>
							<Typography className='underline' as='p' surface variant='body'>
								Москва
							</Typography>
						</div>
					</div>
					<div className='flex flex-col gap-1'>
						<Typography as='span' variant='subbody'>
							Размер посылки
						</Typography>
						<DropdownMenu>
							<DropdownTriggerWrapper onClick={() => setShowModalSizes(true)}>
								<div className='flex items-center gap-2'>
									<span>Не выбран</span>
								</div>
							</DropdownTriggerWrapper>
						</DropdownMenu>
					</div>
				</div>
				<Button
					className='flex items-center justify-center gap-2'
					variant='black'
				>
					Рассчитать <ArrowRight width={16} height={16} />
				</Button>
			</Card>
			<Card className='p-6 flex flex-col gap-6' as='form'>
				<Typography as='h3' variant='head'>
					Отследить посылку
				</Typography>
				<Input placeholder='Номер заказа' />
				<Button variant='black'>Найти</Button>
			</Card>
			<div className='flex flex-col gap-1 bg-primary-green rounded-3xl relative p-4'>
				<Typography
					as='h4'
					variant='head'
					className='relative z-10 text-primary-foreground'
				>
					Бесплатная доставка
				</Typography>
				<Typography
					className='text-primary-foreground'
					as='p'
					variant='subbody'
				>
					за приведенного друга
				</Typography>
				<img className='absolute right-0 top-0 z-0' src={handhsake} alt='' />
			</div>
			<SizesModal setShow={setShowModalSizes} show={showModalSizes} />
		</div>
	)
}

const cities = [
	"Москва",
	"Санкт-Петербург",
	"Новосибирск",
	"Томск",
	"Новокузнецк",
	"Красноярск",
	"Екатеринбург",
	"Хабаровск",
]
const CitiesModal = ({
	onClose,
	showModal,
}: {
	onClose: () => void
	showModal: boolean
}) => {
	return (
		<div
			className={`fixed z-10 top-0 left-0 bg-primary-foreground w-full h-full pr-4 pl-4 pt-3 ${showModal ? "animate-show block" : "animate-hide hidden"}`}
		>
			<div className='flex gap-4 items-center pb-3 pt-3'>
				<button type='button' onClick={onClose}>
					<X width={24} height={24} />
				</button>
				<Typography as='h2' variant='head'>
					Куда
				</Typography>
			</div>
			<ul className='flex flex-col mt-3'>
				{cities.map(city => (
					<li key={city} className='flex justify-between pt-4 pb-4'>
						{city}{" "}
						<ChevronRight width={24} height={24} className='text-input' />
					</li>
				))}
			</ul>
		</div>
	)
}

interface Package {
	id: string
	name: string
	length: number
	width: number
	height: number
	weight: number
}

const sizesButtons = ["Примерные", "Точные"]
const SizesModal = ({
	show,
	setShow,
}: {
	show: boolean
	setShow: (val: boolean) => void
}) => {
	const [acitveSize, setAcitveSize] = useState("Примерные")
	const [packages, setPackages] = useState<Package[]>([])
	const [activePackage, setActivePackage] = useState(0)
	useEffect(() => {
		async function getPackages() {
			const payload = await api.get<{ success: true; packages: Package[] }>(
				"/delivery/package/types",
			)
			if (payload.success) {
				setPackages(payload.data.packages)
			}
		}
		getPackages()
	}, [])

	return (
		<>
			<div
				onClick={() => setShow(false)}
				className={`${show ? "block" : "hidden"} w-full h-full fixed bg-black opacity-50 top-0 left-0 z-10`}
			></div>
			<div
				className={`${show ? "block animate-show" : "hidden animate-hide"} bg-white fixed bottom-0 left-0 pt-4 pb-4 pl-4 pr-4 w-full z-10 rounded-r-2xl rounded-l-2xl`}
			>
				<Typography className='mb-3 pt-3 pb-3 pr-2 pl-2' as='p' variant='head'>
					Размер посылки
				</Typography>
				<div className='bg-muted p-1 rounded-full flex'>
					{sizesButtons.map(btn => (
						<button
							key={btn}
							onClick={() => setAcitveSize(btn)}
							className={`pt-2 flex-1 pb-2 font-bold pr-[27.5px] pl-[27.5px] rounded-full ${acitveSize === btn ? "bg-white shadow-tab" : ""}`}
						>
							<Typography as='p' variant='subhead'>
								{btn}
							</Typography>
						</button>
					))}
				</div>
				{packages.length > 0 && acitveSize === "Примерные" && (
					<div
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
						className='flex flex-col gap-2 max-h-83 overflow-y-scroll pt-3'
					>
						{packages.map((p, i) => (
							<Card
								key={p.name}
								className='flex p-4 justify-between h-22.5'
								rounded='sm'
								onClick={() => {
									console.log(i)
									setActivePackage(i)
								}}
							>
								<div className='flex gap-4'>
									<div className='w-12 h-12'></div>
									<div className=''>
										<Typography variant='head' as='p'>
											{p.name}
										</Typography>
										<Typography variant='subbody' as='p'>
											{p.length}x{p.width}x{p.height}
										</Typography>
									</div>
								</div>
								<span
									className={`w-4 h-4 rounded-full ${activePackage === i ? "bg-primary" : "bg-secondary"}`}
								></span>
							</Card>
						))}
					</div>
				)}
				{acitveSize === "Точные" && <SizeExactlyForm />}
			</div>
		</>
	)
}
const properties = ["Длина", "Ширина", "Высота", "Вес"]
const SizeExactlyForm = () => {
	return (
		<div className='flex flex-col gap-4 pt-3'>
			{properties.map(prop => (
				<div className='flex flex-col gap-1'>
					<label htmlFor={`input-${prop}`}>
						<Typography as='p' variant='subbody'>
							{prop}
						</Typography>
					</label>
					<Input
						placeholder={prop === "Вес" ? "кг" : "см"}
						id={`input-${prop}`}
					/>
				</div>
			))}
		</div>
	)
}

export default Calculation
