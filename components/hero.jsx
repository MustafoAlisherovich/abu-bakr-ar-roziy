'use client'

import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import Link from 'next/link'

const HeroPage = () => {
	const t = useTranslate()

	return (
		<section
			id='home'
			className='relative bg-cover bg-center bg-no-repeat h-[80vh] md:h-[85vh] lg:h-screen flex items-center justify-center pt-20' //  pt-20 o'zgarish
			style={{ backgroundImage: "url('/assets/images/img1.JPG')" }}
		>
			{/* Optional overlay */}
			<div className='absolute inset-0 bg-opacity-30'></div>

			<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6'>
				<h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg'>
					Abu Bakr Ar Roziy Med Servis
				</h1>

				<p className='text-white text-lg sm:text-xl leading-relaxed drop-shadow-md'>
					{t('description')}
				</p>

				<div className='flex justify-center mt-6'>
					<Link href={'#blogs'}>
						<Button
							aria-label='bizning bloglar'
							size='lg'
							className='font-semibold shadow-lg rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-green-700  text-white hover:shadow-xl hover:from-green-600 hover:via-green-700 hover:to-green-800 transition transform hover:-translate-y-0. active:translate-y-0 px-6 py-3'
						>
							{t('ourBlogs')}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HeroPage
