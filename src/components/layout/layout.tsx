import { ReactNode } from "react"
import Footer from "./footer"

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="pt-8 pb-4 pr-4 pl-4 flex flex-col gap-2">
			{children}
			<Footer />
		</div>
	)
}

export default Layout
