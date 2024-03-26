import { capitalizeSentence } from '@/utils';
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

export function TableBase({ heads, children, variant, colorScheme, propsTable, propsBase }) {
	return (
		<TableContainer>
			<Table
				variant={variant || 'striped'}
				colorScheme={colorScheme || 'gray'}
				{...propsBase}
			>
				<Thead>
					<Tr>
						{heads?.map((head) => (
							<Th
								key={head}
								color={'black'}
								fontSize={'0.875rem'}
								borderBottom={'2px solid #E2E8F0'}
								{...propsTable}
							>
								{capitalizeSentence(head)}
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>{children}</Tbody>
			</Table>
		</TableContainer>
	);
}
