'use client'

import Logo from '@/components/shared/logo'
import { navlinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { FacebookIcon, InstagramIcon, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import LanguageDropdown from './language-dropdown'
import Mobile from './mobile'

const Navbar = () => {
	const t = useTranslate()

	return (
		<header className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl '>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo */}
					<Link href='/'>
						<Logo />
					</Link>

					{/* Desktop Nav */}
					<nav className='hidden md:flex space-x-6 text-gray-700 text-sm font-medium'>
						{navlinks.map(nav => (
							<Link
								key={nav.name}
								href={nav.href}
								className='py-2 px-3 hover:bg-teal-50 hover:text-teal-600 rounded-md transition'
							>
								{t(nav.name)}
							</Link>
						))}
					</nav>

					{/* Right Side (socials + lang) */}
					<div className='hidden md:flex items-center space-x-4'>
						<LanguageDropdown />
						<Button size='icon' variant='ghost' aria-label='phone'>
							<a href='tel:+998994070301' aria-label='+998994070301'>
								<span>
									<Phone />
								</span>
							</a>
						</Button>
						<Button size='icon' variant='ghost' aria-label='instagram'>
							<a href='https://www.instagram.com/ar.roziy_clinic'>
								<span>
									<InstagramIcon />
								</span>
							</a>
						</Button>
						<Button size='icon' variant='ghost' aria-label='facebook'>
							<a href='https://www.facebook.com/arroziy.clinic'>
								<span>
									<FacebookIcon />
								</span>
							</a>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden'>
						<Mobile />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
