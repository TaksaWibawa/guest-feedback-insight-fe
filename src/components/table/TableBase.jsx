import { capitalizeSentence } from "@/utils";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

export function TableBase({ heads, children, propsTableBase }) {
	return (
		<TableContainer>
			<Table
				variant={propsTableBase?.variant || "striped"}
				{...propsTableBase}
			>
				<Thead>
					<Tr>
						{heads?.map((head) => (
							<Th key={head}>{capitalizeSentence(head)}</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>{children}</Tbody>
			</Table>
		</TableContainer>
	);
}
