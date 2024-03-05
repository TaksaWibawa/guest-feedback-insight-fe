import { Button } from "@chakra-ui/react";
import { MdOutlineQuestionMark } from "react-icons/md";

export function ButtonOutline({ text = "Button", leftIcon = <MdOutlineQuestionMark />, ...props }) {
	return (
		<Button
			justifyContent={"flex-start"}
			leftIcon={leftIcon}
			_active={{
				bgColor: "brand.500",
				color: "white",
			}}
			{...props}
		>
			{text}
		</Button>
	);
}
