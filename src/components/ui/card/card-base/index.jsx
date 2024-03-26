import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export function CardBase({ children, title, subTitle, propsHeader, propsBody }) {
	return (
		<Card
			width={"100%"}
			height={"300px"}
			boxShadow={"md"}
		>
			<CardHeader
				textAlign={propsHeader?.textAlign || "center"}
				paddingBottom={0}
				{...propsHeader}
			>
				<Heading fontSize={"1.5rem"}>{title}</Heading>
				<Text
					fontSize={"1.15rem"}
					color={"GrayText"}
				>
					{subTitle}
				</Text>
			</CardHeader>
			<CardBody
				display={"flex"}
				alignItems={propsBody?.alignItems || "center"}
				paddingTop={propsBody?.paddingTop || "0.5rem"}
				{...propsBody}
			>
				{children}
			</CardBody>
		</Card>
	);
}
