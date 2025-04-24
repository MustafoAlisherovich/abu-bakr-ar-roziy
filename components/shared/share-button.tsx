// components/ShareButtons.tsx
'use client'

import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import { Facebook, Link2, Linkedin, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface Props {
	slug: string
	title: string
	lng: string
}

export default function ShareButtons({ slug, title }: Props) {
	const t = useTranslate()
	const [fullUrl, setFullUrl] = useState('')
	const [shareUrl, setShareUrl] = useState({
		twitter: '',
		facebook: '',
		linkedin: '',
	})

	useEffect(() => {
		const origin = typeof window !== 'undefined' ? window.location.origin : ''
		const url = `${origin}/blog/${slug}`

		const encodedUrl = encodeURIComponent(url)
		const encodedTitle = encodeURIComponent(title)

		setFullUrl(url)
		setShareUrl({
			twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
		})
	}, [slug, title])

	const handleCopy = async () => {
		if (!fullUrl) {
			toast.error('Hali link tayyor emas, biroz kuting')
			return
		}
		try {
			await navigator.clipboard.writeText(fullUrl)
			toast.success(t('copy'))
		} catch {
			toast.error(t('copyError'))
		}
	}

	return (
		<>
			<Button
				aria-label='twitter'
				size='icon'
				variant='outline'
				onClick={() => window.open(shareUrl.twitter, '_blank')}
				disabled={!shareUrl.twitter}
			>
				<Twitter />
			</Button>
			<Button
				aria-label='facebook'
				size='icon'
				variant='outline'
				onClick={() => window.open(shareUrl.facebook, '_blank')}
				disabled={!shareUrl.facebook}
			>
				<Facebook />
			</Button>
			<Button
				aria-label='linkedin'
				size='icon'
				variant='outline'
				onClick={() => window.open(shareUrl.linkedin, '_blank')}
				disabled={!shareUrl.linkedin}
			>
				<Linkedin />
			</Button>
			<Button
				aria-label='copy'
				size='icon'
				variant='outline'
				onClick={handleCopy}
				disabled={!fullUrl}
			>
				<Link2 />
			</Button>
		</>
	)
}
