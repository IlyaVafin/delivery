import { Route, Routes } from "react-router"
import Home from "./pages/home"

const App = () => {
	return (
		<Routes>
			<Route element={<Home />} path='/' />
		</Routes>
	)
}

export default App
