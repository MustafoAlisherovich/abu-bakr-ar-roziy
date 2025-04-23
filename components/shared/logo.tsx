import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex items-center space-x-3'>
			<Image
				src={'/assets/logo/logo.png'}
				alt='Ar-Roziy Clinic Logo'
				width={130}
				height={130}
			/>
		</div>
	)
}

export default Logo
