import { BreadcrumbCustom } from '@/components/ui/breadcrumb';
import { DropdownCustom } from '@/components/ui/dropdown';
import { Flex, Heading } from '@chakra-ui/react';
import { useDropdownStore, useReviewsStore } from '@/stores';
import { usePathnameToArray } from '@/hooks';

import { DATE_OPTIONS, VENDOR_OPTIONS } from './constants';

export function SectionHead({ title }) {
	const pathname = usePathnameToArray();
	const { setVendor, setTimePeriod } = useDropdownStore();
	const { loading } = useReviewsStore();

	const handleVendorChange = (value) => {
		setVendor(value);
	};

	const handleTimePeriodChange = (value) => {
		setTimePeriod(value);
	};

	return (
		<Flex
			flexDirection={'column'}
			gap={'1rem'}
		>
			<BreadcrumbCustom path={pathname} />
			<Flex
				alignItems={'center'}
				justifyContent={'space-between'}
				marginBottom={'1rem'}
			>
				<Heading>{title || 'No Title'}</Heading>
				<Flex gap={'0.5rem'}>
					<DropdownCustom
						width={'25rem'}
						options={VENDOR_OPTIONS}
						defaultValue={VENDOR_OPTIONS[0].value}
						onChange={handleVendorChange}
						isLoading={loading}
					/>
					<DropdownCustom
						options={DATE_OPTIONS}
						defaultValue={DATE_OPTIONS[0].value}
						onChange={handleTimePeriodChange}
						isLoading={loading}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
