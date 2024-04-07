import { BaseLayout } from '@/layout';
import { PageContentMissing, PageGuestReviews, PageLogin, PageSentimentAnalytics } from '@/pages';
import { RoutePrivate } from './RoutePrivate';
import { useRoutes } from 'react-router-dom';
import { RouteProtected } from './RouteProtected';

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
			path: '*',
			element: <PageContentMissing />,
		},
	]);

	return routes;
};
