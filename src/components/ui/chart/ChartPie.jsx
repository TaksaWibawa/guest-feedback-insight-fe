import { capitalizeSentence } from '@/utils';
import EChartsReact from 'echarts-for-react';

export const ChartPie = ({ chartData }) => {
	const option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)',
		},
		legend: {
			top: 'bottom',
			left: 'center',
			itemWidth: 15,
			itemHeight: 15,
			data: chartData?.map((item) => capitalizeSentence(item.sentiment)),
		},
		series: [
			{
				name: 'Ratio Sentiment Analysis',
				type: 'pie',
				radius: ['40%', '70%'],
				center: ['50%', '45%'],
				avoidLabelOverlap: false,

				label: {
					show: true,
					position: 'outside',
					formatter: '{d}%',
					fontSize: 10,
					lineStyle: {
						color: '#555',
						width: 1,
						type: 'solid',
					},
				},
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2,
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 14,
						fontWeight: 'bold',
					},
				},
				labelLine: {
					show: true,
					length: 10,
					smooth: 0.2,
				},
				data: chartData
					?.filter((item) => item.count !== 0)
					?.map((item) => ({
						value: item.count,
						name: capitalizeSentence(item.sentiment),
						itemStyle: { color: getColorByName(item.sentiment) },
					})),
			},
		],
	};

	return (
		<EChartsReact
			option={option}
			style={{ height: '100%', width: '100%' }}
		/>
	);
};

function getColorByName(name) {
	switch (name) {
		case 'positive':
			return 'blue';
		case 'negative':
			return 'red';
		case 'neutral':
			return 'gray';
		default:
			return 'black';
	}
}
