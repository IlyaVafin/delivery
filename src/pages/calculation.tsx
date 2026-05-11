import ellipse from "@/assets/ellipse.svg"
import Button from "@/components/button"
import Card from "@/components/card"
import { DropdownMenu } from "@/components/dropdown-menu"
import DropdownTriggerWrapper from "@/components/dropdown-trigger-wrapper"
import Input from "@/components/input"
import Typography from "@/components/typography"
import { ArrowRight, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import handhsake from "@/assets/handshake.png"
const Calculation = () => {
	const [showModalWhereTo, setShowModalWhereTo] = useState(false)
	return (
		<div className='pt-8 pb-4 pr-4 pl-4 flex flex-col gap-2'>
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
							Размер посылки
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
							Город назначения
						</Typography>
						<DropdownMenu>
							<DropdownTriggerWrapper>
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
				<Typography as='h4' variant='head' className='relative z-10 text-primary-foreground'>
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
					<li className='flex justify-between pt-4 pb-4'>
						{city}{" "}
						<ChevronRight width={24} height={24} className='text-input' />
					</li>
				))}
			</ul>
		</div>
	)
}
export default Calculation
