import { Navbar } from "./Navbar";


export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />

			<div className="w-4/5 h-3/4 mx-5 mt-28">{children}</div>
		</>
	)
}
