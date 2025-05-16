'use client'

/* eslint-disable @next/next/no-img-element */

import useTranslate from '@/hooks/use-translate'
import { IService } from '@/types'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Card, CardHeader, CardTitle } from './ui/card'

interface Props {
	services: IService[]
}

const Service = ({ services }: Props) => {
	const t = useTranslate()
	const { lng } = useParams() as { lng?: string }

	return (
		<section id='services' className='py-12 px-4 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-20 text-primary'>
					{t('navlink3')}
				</h2>
				<div className='flex flex-wrap justify-center gap-8'>
					{services.map((service, index) => (
						<Link key={index} href={`/${lng}/service/${service.slug}`}>
							<Card className='group w-64 h-60 border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer'>
								{service.icon && (
									<div className='bg-teal-50 p-5 rounded-full mb-6'>
										<img
											src={service.icon.url}
											alt={`${service.title}`}
											width={56}
											height={56}
											className='object-contain'
											loading='lazy'
										/>
									</div>
								)}

								<CardHeader className='p-0 w-full flex flex-col items-center justify-center space-y-1'>
									<CardTitle className='text-base font-bold text-primary uppercase tracking-wide text-center'>
										{service.title}
									</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default Service
