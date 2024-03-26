import './style.css';

import { BreakLabel } from './BreakLabel';
import { Button } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';

export function Pagination({ totalPage, page, isLoading, onNextPage, onPrevPage }) {
	return (
		<ReactPaginate
			previousLabel={
				<Button
					bgColor={'brand.500'}
					color={'white'}
					_hover={{
						bgColor: 'brand.600',
					}}
					isDisabled={page === 1 || isLoading}
				>
					Previous
				</Button>
			}
			nextLabel={
				<Button
					bgColor={'brand.500'}
					color={'white'}
					isDisabled={page === totalPage || isLoading}
					_hover={{
						bgColor: 'brand.600',
					}}
				>
					Next
				</Button>
			}
			breakLabel={<BreakLabel />}
			breakClassName="break-me"
			pageCount={totalPage || 1}
			marginPagesDisplayed={2}
			pageRangeDisplayed={1}
			onPageChange={(selected) => {
				if (selected.selected + 1 > page) {
					onNextPage(page);
				} else {
					onPrevPage(page);
				}
			}}
			containerClassName="pagination"
			subContainerClassName="pages pagination"
			activeClassName="active"
		/>
	);
}
