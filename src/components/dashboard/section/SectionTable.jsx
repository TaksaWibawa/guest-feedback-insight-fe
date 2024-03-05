import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useExpanded, useTable } from "react-table";

const column = ["category", "sentiment score", "trends", "mentions", "positive", "negative", "neutral"];

const data = [
	{
		category: "Category 1",
		"sentiment score": 0.8,
		trends: "Trend 1",
		mentions: 100,
		positive: 80,
		negative: 10,
		neutral: 10,
	},
	{
		category: "Category 2",
		"sentiment score": 0.6,
		trends: "Trend 2",
		mentions: 200,
		positive: 120,
		negative: 50,
		neutral: 30,
	},
	// Add more objects as needed
];

const columns = column.map((header) => ({
	Header: header,
	accessor: header,
}));

export function SectionTable() {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state: { expanded },
	} = useTable(
		{
			columns,
			data,
		},
		useExpanded // Use the useExpanded plugin hook
	);

	const isOdd = (rowId) => {
		let id = 0;
		const pos = rowId.lastIndexOf(".");
		if (pos === -1) {
			id = parseInt(rowId, 10);
		} else {
			id = parseInt(rowId.substr(pos + 1), 10);
		}
		return (id + 1) % 2 ? true : false;
	};

	return (
		<>
			<Table
				variant="expanded"
				colorScheme={"blue"}
				{...getTableProps()}
			>
				<Thead>
					{headerGroups?.map((headerGroup, index) => (
						<Tr
							{...headerGroup.getHeaderGroupProps()}
							key={index}
						>
							{headerGroup.headers.map((column) => (
								<Th
									{...column.getHeaderProps()}
									fontSize={14}
									m={0}
									p={"0.5rem"}
									key={column}
								>
									{column.render("Header")}
								</Th>
							))}
						</Tr>
					))}
				</Thead>
				<Tbody {...getTableBodyProps()}>
					{rows.map((row, index) => {
						prepareRow(row);
						return (
							<Tr
								{...row.getRowProps()}
								data-expanded={row.depth > 0 ? true : null}
								data-row-odd={isOdd(row.id)}
								key={index}
							>
								{row.cells.map((cell) => {
									return (
										<Td
											{...cell.getCellProps()}
											fontSize={14}
											m={0}
											p={"0.5rem"}
											key={index}
										>
											{cell.render("Cell")}
										</Td>
									);
								})}
							</Tr>
						);
					})}
				</Tbody>
			</Table>
			<br />
			<div>Showing the first 20 results of {rows.length} rows</div>
			<pre>
				<code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
			</pre>
		</>
	);
}

{
	/* <TableBase
heads={HEADS}
variant={"simple"}
>
<Tr>
  <Td>
    <Checkbox>Amenities </Checkbox>
  </Td>
</Tr>
</TableBase> */
}
