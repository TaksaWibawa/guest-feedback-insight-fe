import { AspectRatio, Card, Divider, Flex, Heading, IconButton, Image, Spacer, Text } from "@chakra-ui/react";
import { BiExpandVertical } from "react-icons/bi";
import { ButtonOutline } from "../button";
import { MdOutlineCloseFullscreen, MdPeople } from "react-icons/md";

export function Sidebar() {
	return (
		<Flex
			position={"sticky"}
			left={0}
			top={0}
			h={"100vh"}
			p={"1rem"}
			flexDirection={"column"}
			alignItems={"center"}
			bgColor={"white"}
			gap={"1rem"}
			boxShadow={"xl"}
			sx={{
				overflowY: "auto",
			}}
		>
			<Flex
				gap={"2rem"}
				alignItems={"center"}
			>
				<Heading size={"lg"}>Logo</Heading>
				<Spacer />
				<IconButton
					icon={<MdOutlineCloseFullscreen color="gray" />}
					variant={"ghost"}
				/>
			</Flex>
			<Divider borderColor={"blackAlpha.500"} />
			<Flex
				flexDirection={"column"}
				w={"full"}
				gap={"0.5rem"}
			>
				<ButtonOutline
					text="Guest Review"
					leftIcon={<MdPeople />}
					isActive
				/>
				<ButtonOutline color={"black"} />
				<ButtonOutline color={"black"} />
				<ButtonOutline color={"black"} />
				<ButtonOutline color={"black"} />
				<ButtonOutline color={"black"} />
			</Flex>
			<Divider borderColor={"blackAlpha.500"} />
			<Flex
				flexDirection={"column"}
				w={"full"}
				gap={"0.5rem"}
			>
				<ButtonOutline color={"black"} />
				<ButtonOutline color={"black"} />
			</Flex>
			<Spacer />
			<Flex
				as={Card}
				minW={"12rem"}
				p={"0.5rem"}
				borderRadius={"lg"}
				color={"black"}
				justifyContent={"space-around"}
				alignItems={"center"}
				direction={"row"}
				boxShadow={"xl"}
			>
				<AspectRatio
					boxSize={10}
					ratio={1}
				>
					<Image
						src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
						borderRadius={"lg"}
						objectFit={"contain"}
					/>
				</AspectRatio>
				<Flex
					flexDirection={"column"}
					justifyContent={"center"}
				>
					<Text fontSize={"0.9rem"}>Username</Text>
					<Text fontSize={"0.9rem"}>Role</Text>
				</Flex>
				<BiExpandVertical color="gray" />
			</Flex>
		</Flex>
	);
}
