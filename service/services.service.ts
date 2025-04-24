import { IService } from '@/types'
import { gql, request } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getServices = async (locale: string) => {
	const query = gql`
		query GetServices($locale: [Locale!]!) {
			services(locales: $locale) {
				title
				icon {
					url
				}
				slug
			}
		}
	`

	const { services } = await request<{ services: IService[] }>(
		graphqlAPI,
		query,
		{
			locale: [locale, 'uz'],
		}
	)

	return services
}

export const getDetailedService = cache(
	async (slug: string, locale: string) => {
		const query = gql`
			query GetDetailedService($slug: String!, $locale: [Locale!]!) {
				service(locales: $locale, where: { slug: $slug }) {
					content {
						html
					}
					image {
						url
					}
					title
				}
			}
		`

		const { service } = await request<{ service: IService }>(
			graphqlAPI,
			query,
			{
				slug,
				locale: [locale, 'uz'],
			}
		)

		return service
	}
)
