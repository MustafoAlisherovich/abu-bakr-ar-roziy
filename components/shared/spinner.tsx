export default function Spinner() {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'>
			<div className='w-12 h-12 border-4 border-gray-200 border-t-green-700 rounded-full animate-spin'></div>
		</div>
	)
}
