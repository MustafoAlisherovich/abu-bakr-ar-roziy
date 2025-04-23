import About from '@/components/about'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Doctor from '@/components/doctor'
import HeroPage from '@/components/hero'
import Service from '@/components/service'
import Testimonial from '@/components/testimonial'
import { getBlogs } from '@/service/blog.service'
import { getDoctors } from '@/service/doctor.service'
import { getServices } from '@/service/services.service'
import { getTestimonials } from '@/service/testimonial.service'
import { LngParams } from '@/types'

export const revalidate = 60

export const dynamic = 'force-dynamic'

async function Page({ params }: LngParams) {
	const { lng } = params
	const services = await getServices(lng)
	const doctors = await getDoctors(lng)
	const testimonials = await getTestimonials(lng)
	const blog = await getBlogs(lng)

	return (
		<>
			<HeroPage />
			<About />
			<Blog blogs={blog} />
			<Service services={services} />
			<Doctor doctors={doctors} />
			<Testimonial testimonials={testimonials} />
			<Contact />
		</>
	)
}

export default Page
