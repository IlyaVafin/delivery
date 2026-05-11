import Button from "@/components/button"
import Card from "@/components/card"
import Input from "@/components/input"
import Header from "@/components/layout/header"
import Typography from "@/components/typography"
import banner from "@/assets/Banner.png"
const Home = () => {
	return (
		<>
			<Button variant='black'>click me</Button>
			<Button variant='gray'>click me</Button>
			<Input placeholder='Отчество' />
			<Typography as='h1' variant='head'>
				Куда доставить
			</Typography>
			<Typography as='p' variant='subhead'>
				Куда доставить
			</Typography>
			<Typography variant='subbody' as='span'>
				Откуда забрать
			</Typography>
			<Typography as='p' variant='body'>
				г. Москва, ул. Новорогожская, д. 24, кв. 17
			</Typography>
			<Typography as='p' variant='subbody'>
				г. Москва, ул. Новорогожская, д. 24, кв. 17
			</Typography>
			<Typography as='p' variant='hint'>
				г. Москва, ул. Новорогожская, д. 24, кв. 17
			</Typography>
			<Card className='p-4'>dfasdsa</Card>
			<Header />
			<img src={banner}/>
		</>
	)
}

export default Home
