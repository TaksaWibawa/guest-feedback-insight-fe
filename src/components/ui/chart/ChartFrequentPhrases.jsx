import EChartsReact from 'echarts-for-react';

const DATA = [
	{ name: 'Bedroom', mentions: 100, positive: 50, negative: 50, neutral: 5 },
	{ name: 'Living Room', mentions: 80, positive: 40, negative: 40, neutral: 0 },
	{ name: 'Kitchen', mentions: 70, positive: 35, negative: 35, neutral: 0 },
	{ name: 'Bathroom', mentions: 60, positive: 30, negative: 30, neutral: 0 },
	{ name: 'Garden', mentions: 50, positive: 25, negative: 25, neutral: 0 },
	{ name: 'Garage', mentions: 40, positive: 20, negative: 20, neutral: 0 },
	{ name: 'Office', mentions: 30, positive: 15, negative: 15, neutral: 0 },
	{ name: 'Balcony', mentions: 20, positive: 10, negative: 10, neutral: 0 },
	{ name: 'Pool', mentions: 10, positive: 5, negative: 5, neutral: 0 },
	{ name: 'Others', mentions: 5, positive: 3, negative: 2, neutral: 0 },
].sort((a, b) => a.mentions - b.mentions);

export const ChartFrequentPhrases = ({ data = DATA }) => {
	const option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			},
			formatter: (params) => {
				const { name, mentions, positive, negative, neutral } = data[params[0].dataIndex];
				return `
						<div style="font-weight:bold; font-size:14px; margin-bottom:10px;">${name}</div>
						<div>Mentions: ${mentions}</div>
						<div style="display:flex; align-items:center; margin-top:5px;">
								<span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:#2ecc71; margin-right:5px;"></span>
								<span>Positive: ${positive}</span>
						</div>
						<div style="display:flex; align-items:center; margin-top:5px;">
								<span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:#e74c3c; margin-right:5px;"></span>
								<span>Negative: ${negative}</span>
						</div>
						<div style="display:flex; align-items:center; margin-top:5px;">
								<span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:#808080; margin-right:5px;"></span>
								<span>Neutral: ${neutral}</span>
						</div>`;
			},
		},
		xAxis: {
			type: 'value',
		},
		yAxis: {
			type: 'category',
			data: data.slice(5, 10).map((item) => item.name),
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '1%',
			containLabel: true,
			height: '95%',
		},
		series: [
			{
				name: 'Positive',
				data: data
					.slice(5, 10)
					.map((item) => item.positive)
					.filter((item) => item > 0),
				type: 'bar',
				stack: 'total',
				barCategoryGap: '50%',
				groupPadding: 2,
				label: {
					show: true,
					position: 'insideRight',
				},
				emphasis: {
					focus: 'series',
					blur: 'series',
					itemStyle: {
						color: 'green',
					},
				},
				itemStyle: {
					color: 'green',
				},
			},
			{
				name: 'Negative',
				data: data
					.slice(5, 10)
					.map((item) => item.negative)
					.filter((item) => item > 0),
				type: 'bar',
				stack: 'total',
				barCategoryGap: '50%',
				groupPadding: 2,
				label: {
					show: true,
					position: 'insideRight',
				},
				emphasis: {
					focus: 'series',
					blur: 'series',
					itemStyle: {
						color: 'red',
					},
				},
				itemStyle: {
					color: 'red',
				},
			},
			{
				name: 'Neutral',
				data: data
					.slice(5, 10)
					.map((item) => item.neutral)
					.filter((item) => item > 0),
				type: 'bar',
				stack: 'total',
				barCategoryGap: '50%',
				groupPadding: 2,
				label: {
					show: true,
					position: 'insideRight',
				},
				emphasis: {
					focus: 'series',
					blur: 'series',
					itemStyle: {
						color: 'gray',
					},
				},
				itemStyle: {
					color: 'gray',
				},
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
