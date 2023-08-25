import Button from "@/components/Button";

function Times({ data=[], children }: TimesProps) {
	return (
		<div className="">
			<p className="text-xl font-bold text-secondary text-center underline underline-offset-3 decoration-4 decoration-secondary dark:decoration-white">
				Available Times
			</p>
			{!data.length ?
				<div className='mt-4 border-secondary border-2 text-center p-8'>
					<h5>We don't have free slots. Please select other day.</h5>
				</div> :
			<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 lg:max-w-xl">
				{data?.map((time, index)=>
					<Button
						key={index}
					>
						{time}
					</Button>
				)}
			</div>
			}
			{children}
		</div>
	);
}

interface TimesProps {
	data?: Array<string>,
	children?: React.ReactNode,
}

export default Times;
