import { CardRating, CardSentiment } from "@/components/ui/card";
import { Grid, GridItem } from "@chakra-ui/react";

const currPeriodData = [
	{ value: 321, name: "Positive", color: "blue" },
	{ value: 230, name: "Negative", color: "red" },
	{ value: 200, name: "Neutral", color: "gray" },
];

const lastPeriodData = [
	{ value: 100, name: "Positive", color: "blue" },
	{ value: 40, name: "Negative", color: "red" },
	{ value: 10, name: "Neutral", color: "gray" },
];

export function SectionStatistics() {
	return (
		<Grid
			templateColumns={"60% 38%"}
			gap={"2%"}
		>
			<GridItem>
				<CardSentiment
					currentPeriodData={currPeriodData}
					lastPeriodData={lastPeriodData}
				/>
			</GridItem>
			<GridItem>
				<CardRating
					currentRating={4.4}
					previousRating={2.7}
					totalReviewers={10000}
				/>
			</GridItem>
		</Grid>
	);
}
