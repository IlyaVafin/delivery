import { Route, Routes } from "react-router"
import Layout from "./components/layout/layout"
import Calculation from "./pages/calculation"

const App = () => {
	return (
		<>
			<Layout>
				<Routes>
					<Route element={<Calculation />} path='/' />
				</Routes>
			</Layout>
		</>
	)
}

export default App
