import { ChartPie } from "../chart";
import { CardBase } from "./CardBase";

export function CardSentiment({ currentPeriodData, lastPeriodData }) {
	return (
		<CardBase
			title={"Sentiment Analysis"}
			subTitle={"per Month"}
		>
			<ChartPie
				currentPeriodData={currentPeriodData}
				lastPeriodData={lastPeriodData}
			/>
		</CardBase>
	);
}
