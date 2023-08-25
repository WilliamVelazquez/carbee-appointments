import Card from "@/components/Card";
import Pagination from "@/components/Pagination";

import { getFullDate, getHourAndMinutes } from "@/helpers/client/utils";
import { EdgesProps, PageInfoProps, PaginationTypes } from "@/helpers/types";

const List = ({ data, pageInfo, handlePagination }: ListProps) => {
	return (
		<div>
			<div className='grid gap-4 mb-4 grid-cols-none md:grid-cols-2'>
				{data.map((appointment: any, index: number) => 
					<Card
						key={index}
						date={getFullDate(appointment?.node?.scheduledTime)}
						status={appointment?.node?.status}
						time={getHourAndMinutes(appointment?.node?.scheduledTime)}
						minutes={appointment?.node?.duration}
						services={[appointment?.node?.workOrder?.service]}
					/>
				)}
			</div>
			<Pagination total={data.length} pageInfo={pageInfo} handlePagination={handlePagination} />
		</div>
	);
}

interface ListProps {
	data: Array<EdgesProps>,
	pageInfo: PageInfoProps,
	handlePagination: (type: PaginationTypes) => void,
}

export default List;
