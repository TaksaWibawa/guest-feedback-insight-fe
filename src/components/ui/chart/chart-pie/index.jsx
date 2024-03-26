import EChartsReact from 'echarts-for-react';

export const ChartPie = ({ currentPeriodData, lastPeriodData }) => {
	const option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)',
		},
		legend: {
			top: 'bottom',
			left: 'center',
			data: currentPeriodData.map((item) => item.name),
		},
		series: [
			{
				name: 'Last Period Sentiment Analysis',
				type: 'pie',
				radius: ['40%', '70%'],
				center: ['25%', '50%'],
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
				data: lastPeriodData
					// .filter((item) => item.count !== 0)
					.map((item) => ({
						value: item.count,
						name: item.name,
						itemStyle: { color: getColorByName(item.name) },
					})),
			},
			{
				name: 'Current Period Sentiment Analysis',
				type: 'pie',
				radius: ['40%', '70%'],
				center: ['75%', '50%'],
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
				data: currentPeriodData
					.filter((item) => item.count !== 0)
					.map((item) => ({
						value: item.count,
						name: item.name,
						itemStyle: { color: getColorByName(item.name) },
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
		case 'Positive':
			return 'blue';
		case 'Negative':
			return 'red';
		case 'Neutral':
			return 'gray';
		default:
			return 'black';
	}
}
