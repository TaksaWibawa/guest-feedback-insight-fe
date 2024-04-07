import { ChartPie } from '../../chart';
import { CardBase } from '../card-base';

export function CardSentiment({ chartData }) {
	return (
		<CardBase
			title={'Ratio Sentiment Analysis'}
			subTitle={'In Percentage'}
			propsTitle={{
				width: '100%',
			}}
		>
			<ChartPie chartData={chartData} />
		</CardBase>
	);
}
