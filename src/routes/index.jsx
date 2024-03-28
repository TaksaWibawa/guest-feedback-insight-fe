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
		title: 'Welcome',
	},
	{
		path: '/guest-reviews',
		element: (
			<BaseLayout>
				<PageGuestReviews />
			</BaseLayout>
		),
		title: 'Guest Reviews',
	},
	{
		path: '/sentiment-analytics',
		element: (
			<BaseLayout>
				<PageSentimentAnalytics />
			</BaseLayout>
		),
		title: 'Sentiment Analytics',
	},
	{
		path: '*',
		element: <PageContentMissing />,
		title: 'Page Not Found',
	},
];
