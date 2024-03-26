import { capitalizeSentence } from '@/utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export function BreadcrumbCustom({ path }) {
	const navigate = useNavigate();

	return (
		<Breadcrumb
			spacing="8px"
			separator={<BiChevronRight color="#8D8D8D" />}
			ml={'0.1rem'}
		>
			{path.map((value, index) => {
				const isLastIndex = index === path.length - 1;

				return (
					<BreadcrumbItem
						key={index}
						isCurrentPage={isLastIndex}
						fontWeight={isLastIndex ? 'semibold' : 'normal'}
						fontSize={'xs'}
						color={isLastIndex ? 'customGray.500' : 'customGray.300'}
					>
						<BreadcrumbLink
							onClick={value === 'dashboard' ? () => navigate('/') : () => {}}
							_hover={{
								color: !isLastIndex && 'brand.500',
								cursor: value === 'dashboard' ? 'pointer' : 'default',
							}}
						>
							{value === '' ? 'Dashboard' : capitalizeSentence(value)}
						</BreadcrumbLink>
					</BreadcrumbItem>
				);
			})}
		</Breadcrumb>
	);
}
