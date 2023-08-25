import Datepicker, { DateValueType } from "react-tailwindcss-datepicker"
; 
import Times from "@/components/Times";
import { getHourAndMinutes, getTomorrow } from "@/helpers/client/utils";

function Availability({ data, selectedDate, handleSelectDate, children }: AvailabilityProps) {
	const tomorrow = getTomorrow();
	const times = data?.map((item)=>getHourAndMinutes(item));

	return (
		<div>
			<Times data={times} />
			<p className='mt-8'>Select a date to check available times:</p>
			<Datepicker
				asSingle
				readOnly
				useRange={false}
				value={selectedDate} 
				startFrom={tomorrow}
				primaryColor='orange'
				onChange={handleSelectDate} 
				minDate={tomorrow}
				placeholder={"Select a valid date"}
			/> 
			{children}
		</div>
	);
}

interface AvailabilityProps {
	data: Array<string>,
	selectedDate: DateValueType,
	handleSelectDate: (value: DateValueType)=> void,
	children?: React.ReactNode,
}

export default Availability;
