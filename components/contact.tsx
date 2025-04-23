'use client'

import useTranslate from '@/hooks/use-translate'
import ContactForm from './forms/contact-form'

const Contact = () => {
	const t = useTranslate()

	return (
		<section id='contact' className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-15 text-primary'>
					{t('navlink5')}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					{/* Contact Form */}
					<div className='w-full'>
						<ContactForm />
					</div>

					{/* Map */}
					<div className='w-full'>
						<div className='mt-12 px-4'>
							<h1 className='text-2xl sm:text-3xl font-poppins text-primary font-bold text-center sm:text-left'>
								{t('map')}
							</h1>

							<div className='mt-5 flex justify-center'>
								<div className='w-full max-w-[550px] aspect-[4/3]'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.117760111165!2d70.92693007583489!3d40.56107667141673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bae9ed3877d2a3%3A0xf918c49b9c2893b9!2sAbu%20Bakr%20Ar-Roziy%20Med%20Servis!5e0!3m2!1sen!2s!4v1745085970708!5m2!1sen!2s'
										loading='lazy'
										className='w-full h-full rounded-md shadow-lg border-0'
										allowFullScreen
									>
										Map
									</iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
