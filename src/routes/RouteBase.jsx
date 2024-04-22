import { BaseLayout } from '@/layout';
import { PageContentMissing, PageGuestReviews, PageLogin, PageSentimentAnalytics, PageUnauthorized } from '@/pages';
import { RoutePrivate } from './RoutePrivate';
import { RouteProtected } from './RouteProtected';
import { useRoutes } from 'react-router-dom';

export const RouteBase = () => {
	const routes = useRoutes([
		{
			element: <RouteProtected />,
			children: [
				{
					path: '/',
					element: <PageLogin />,
				},
			],
		},
		{
			element: <RoutePrivate />,
			children: [
				{
					path: '/guest-reviews',
					element: (
						<BaseLayout>
							<PageGuestReviews />
						</BaseLayout>
					),
				},
				{
					path: '/sentiment-analytics',
					element: (
						<BaseLayout>
							<PageSentimentAnalytics />
						</BaseLayout>
					),
				},
			],
		},
		{
			path: '/unauthorized',
			element: <PageUnauthorized />,
		},
		{
			path: '*',
			element: <PageContentMissing />,
		},
	]);

	return routes;
};
