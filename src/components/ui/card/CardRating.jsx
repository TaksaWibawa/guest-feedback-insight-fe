import { Box, CircularProgress, CircularProgressLabel, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { CardBase } from "./CardBase";
import { addDotsToNumber } from "@/utils";

export function CardRating({ currentRating, previousRating, currentReviewers, previousReviewers }) {
	const calculateRating = (rating) => {
		return (rating / 5) * 100;
	};

	return (
		<CardBase
			title={"Review Rating"}
			subTitle={"Past 7 Days"}
			propsBody={{
				justifyContent: "center",
			}}
		>
			<Flex
				direction="column"
				alignItems="center"
				gap={"1rem"}
			>
				<HStack spacing={"1.5rem"}>
					<Tooltip
						label={`Current Rating: ${currentRating} / Previous Rating: ${previousRating}`}
						hasArrow
						closeOnClick={false}
					>
						<Box position={"relative"}>
							<CircularProgress
								value={calculateRating(currentRating)}
								size={"150px"}
								thickness="12px"
								color="brand.300"
							/>
							<CircularProgress
								value={calculateRating(previousRating)}
								size={"115px"}
								thickness="12px"
								color="customGray.200"
								position="absolute"
								top="50%"
								left="50%"
								transform="translate(-50%, -50%)"
								zIndex="1"
							>
								<CircularProgressLabel
									fontWeight={"semibold"}
									color={"brand.500"}
								>
									{currentRating}
								</CircularProgressLabel>
							</CircularProgress>
						</Box>
					</Tooltip>
					<Flex
						flexDirection={"column"}
						justifyContent={"flex-start"}
						gap={"1.25rem"}
					>
						<Flex
							gap={"0.25rem"}
							flexDirection={"column"}
						>
							<Flex
								gap={"0.5rem"}
								alignItems={"center"}
							>
								<Box
									bgColor={"brand.300"}
									width={"0.75rem"}
									height={"0.75rem"}
								/>
								<Text>Current Rating</Text>
							</Flex>
							<Text
								ml={"1.3rem"}
								fontSize={"small"}
								color={"customGray.200"}
							>
								{addDotsToNumber(currentReviewers || 10000)} Reviewers
							</Text>
						</Flex>
						<Flex
							gap={"0.25rem"}
							flexDirection={"column"}
						>
							<Flex
								gap={"0.5rem"}
								alignItems={"center"}
							>
								<Box
									bgColor={"customGray.200"}
									width={"0.75rem"}
									height={"0.75rem"}
								/>
								<Text>Previous Rating</Text>
							</Flex>
							<Text
								ml={"1.3rem"}
								fontSize={"small"}
								color={"customGray.200"}
							>
								{addDotsToNumber(previousReviewers || 7000)} Reviewers
							</Text>
						</Flex>
					</Flex>
				</HStack>
				<Box fontSize={"0.9rem"}>
					Total{" "}
					<Text
						display={"inline"}
						color={"brand.400"}
						fontWeight={"semibold"}
					>
						{addDotsToNumber(currentReviewers + previousReviewers || 10000)}
					</Text>{" "}
					verified reviewers.
				</Box>
			</Flex>
		</CardBase>
	);
}
