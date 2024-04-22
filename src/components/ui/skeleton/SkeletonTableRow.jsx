import { Skeleton, Td, Tr } from '@chakra-ui/react';

export function SkeletonTableRow({ row, cell, width, height, ...props }) {
	return Array(row)
		.fill()
		.map((_, i) => (
			<Tr key={i}>
				{Array(cell)
					.fill()
					.map((_, j) => (
						<Td key={j}>
							<Skeleton
								width={width}
								height={height}
								{...props}
							/>
						</Td>
					))}
			</Tr>
		));
}
