import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { ChildProps } from '@/types'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<main>
				<Navbar />
				{children}
				<Footer />
			</main>
		</div>
	)
}

export default Layout
