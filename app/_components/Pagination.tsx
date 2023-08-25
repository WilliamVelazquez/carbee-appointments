import { PageInfoProps, PaginationTypes } from "@/helpers/types";

function Pagination({ total, pageInfo, handlePagination }: PaginationProps) {
	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-2 py-3">
			<div className="flex flex-1 justify-between sm:hidden">
				<button 
					disabled={!pageInfo?.hasPreviousPage}
					onClick={() => handlePagination('before')}
					className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-light disabled:ring-gray"
				>
					Previous
				</button>
				<button
					disabled={!pageInfo?.hasNextPage}
					onClick={() => handlePagination('after')}
					className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-light disabled:ring-gray"
				>
					Next
				</button>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div className="text-sm text-font-primary grid grid-flow-col gap-2 mr-16">
					<span className="font-medium">Showing</span>
					<span className="font-bold">{total}</span>
					<span className="font-medium">results</span>
				</div>
				<div>
					<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
						<button
							disabled={!pageInfo?.hasPreviousPage}
							onClick={() => handlePagination('before')}
							className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-primary ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:bg-gray-light disabled:ring-gray"
						>
							<span className="sr-only">Previous</span>
							<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
							</svg>
						</button>
						<button
							disabled={!pageInfo?.hasNextPage}
							onClick={() => handlePagination('after')}
							className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-primary ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:bg-gray-light disabled:ring-gray"
						>
							<span className="sr-only">Next</span>
							<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
							</svg>
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
}

interface PaginationProps {
	total: number,
	pageInfo: PageInfoProps,
	handlePagination: (type: PaginationTypes) => void,
}

export default Pagination;
