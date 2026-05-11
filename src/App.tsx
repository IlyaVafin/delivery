import { Route, Routes } from "react-router"
import Calculation from "./pages/calculation"

const App = () => {
	return (
		<Routes>
			<Route element={<Calculation />} path='/' />
		</Routes>
	)
}

export default App
