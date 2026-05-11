import { Route, Routes } from "react-router"
import Calculation from "./pages/calculation"
import Layout from "./components/layout/layout"

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
