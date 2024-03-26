import { BaseLayout } from '@/layout';
import { PageContentMissing, PageGuestReviews, PageSentimentAnalytics } from '@/pages';

export const ROUTES = [
	{
		path: '/',
		element: (
			<BaseLayout>
				<div>
					<h1>Home</h1>
				</div>
			</BaseLayout>
		),
	},
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
	{
		path: '*',
		element: <PageContentMissing />,
	},
];
