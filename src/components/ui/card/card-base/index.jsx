import { Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { DropdownCustom } from '../../dropdown';

export function CardBase({ children, title, subTitle, filterOptions, propsHeader, propsBody, propsTitle, propsDropdown }) {
	return (
		<Card
			width={'full'}
			height={'25rem'}
			boxShadow={'md'}
		>
			<CardHeader
				display={'flex'}
				justifyContent={propsHeader?.justifyContent || 'space-between'}
				alignItems={propsHeader?.alignItems || 'center'}
				textAlign={propsHeader?.textAlign || 'center'}
				paddingBottom={0}
				{...propsHeader}
			>
				<Flex
					direction={'column'}
					justifyContent={'center'}
					width={propsTitle?.width || ''}
					{...propsTitle}
				>
					<Heading fontSize={'1.5rem'}>{title}</Heading>
					<Text
						fontSize={'1.15rem'}
						color={'GrayText'}
					>
						{subTitle}
					</Text>
				</Flex>
				{filterOptions && (
					<DropdownCustom
						options={filterOptions}
						{...propsDropdown}
					/>
				)}
			</CardHeader>
			<CardBody
				display={'flex'}
				alignItems={propsBody?.alignItems || 'center'}
				paddingTop={propsBody?.paddingTop || '0.5rem'}
				{...propsBody}
			>
				{children}
			</CardBody>
		</Card>
	);
}
