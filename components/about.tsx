'use client'

import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'

const About = () => {
	const t = useTranslate()

	return (
		<>
			{/* Section 1 */}
			<section id='about' className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-20 text-primary'>
					{t('navlink2')}
				</h2>
				<div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'>
					{/* Text */}
					<div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-poppins'>
							{t('aboutTitle')}
						</h2>
						<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
							{t('aboutDescription')}
						</p>
					</div>

					{/* Image */}
					<div className='w-full lg:w-1/2'>
						<Image
							src='/assets/images/img2.JPG'
							alt='Med Servis binosi'
							className='rounded-xl shadow-md w-full h-auto object-cover'
							width={600}
							height={400}
							loading='lazy'
						/>
					</div>
				</div>
			</section>

			{/* Section 2 */}
			<section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
				<div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
					{/* Image */}
					<div className='w-full lg:w-1/2'>
						<Image
							src='/assets/images/img3.JPG'
							alt='Med Servis binosi'
							className='rounded-xl shadow-md w-full h-auto object-cover'
							width={600}
							height={400}
							loading='lazy'
						/>
					</div>

					{/* Text */}
					<div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-poppins'>
							{t('about2Title')}
						</h2>
						<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
							{t('about2Description')}
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
