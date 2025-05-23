'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import useTranslate from '@/hooks/use-translate'
import { ITestimonial } from '@/types'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
	testimonials: ITestimonial[]
}

const Testimonial = ({ testimonials }: Props) => {
	const t = useTranslate()
	const [index, setIndex] = useState(0)

	const prev = () => {
		setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
	}

	const next = () => {
		setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
	}

	const testimonial = testimonials[index]

	return (
		<section id='testimonials' className='py-16 px-4 bg-white'>
			<h2 className='text-3xl md:text-4xl font-bold text-center mb-20 text-primary'>
				{t('testimonials')}
			</h2>
			<div className='w-full max-w-3xl mx-auto text-center'>
				<Card className='bg-background/80 backdrop-blur-sm shadow-lg border border-muted p-8 transition hover:shadow-2xl'>
					<CardContent className='flex flex-col items-center gap-6'>
						{testimonial.image?.url ? (
							<Image
								src={testimonial.image.url}
								alt={testimonial.name}
								width={120}
								height={120}
								loading='lazy'
								className='rounded-2xl object-cover shadow-lg border border-muted'
							/>
						) : (
							<div className='w-[100px] h-[100px] flex items-center justify-center rounded-2xl bg-muted'>
								<User className='w-10 h-10 text-muted-foreground' />
							</div>
						)}

						<p className='text-base text-muted-foreground italic leading-relaxed max-w-2xl'>
							“{testimonial.comment}”
						</p>

						<h3 className='text-lg font-semibold text-foreground'>
							{testimonial.name}
						</h3>

						<p className='text-muted-foreground text-xs'>
							{format(new Date(testimonial.createdAt), 'MMM dd, yyyy')}
						</p>
					</CardContent>
				</Card>

				{/* Navigation Buttons */}
				<div className='flex justify-center gap-4 mt-6'>
					<Button
						aria-label='prev'
						variant='ghost'
						size='icon'
						onClick={prev}
						className='hover:bg-accent transition'
					>
						<ChevronLeft className='w-5 h-5' />
					</Button>
					<Button
						aria-label='next'
						variant='ghost'
						size='icon'
						onClick={next}
						className='hover:bg-accent transition'
					>
						<ChevronRight className='w-5 h-5' />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Testimonial
