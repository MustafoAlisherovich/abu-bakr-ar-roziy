import { IService } from '@/types'
import { gql, request } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getServices = async (locale: string) => {
	const query = gql`
		query GetServices($locales: [Locale!]!) {
			services(locales: $locales) {
				slug
				title
				icon {
					url
				}
			}
		}
	`

	const variables = {
		locales: [locale],
	}

	const { services } = await request<{ services: IService[] }>(
		graphqlAPI,
		query,
		variables
	)

	return services
}

export const getDetailedService = cache(
	async (slug: string, locale: string) => {
		const query = gql`
			query GetDetailedService($slug: String!, $locales: [Locale!]!) {
				service(locales: $locales, where: { slug: $slug }) {
					content {
						html
					}
					title
					image {
						url
					}
				}
			}
		`

		const { service } = await request<{ service: IService }>(
			graphqlAPI,
			query,
			{
				slug, // asl slug
				locales: [locale, 'uz'], // til kodi massivda
			}
		)

		return service
	}
)
