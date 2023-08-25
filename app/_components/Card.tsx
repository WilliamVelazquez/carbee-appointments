import { StatusTypes } from "@/helpers/types";
import { status as statusBase } from "@/helpers/client/utils";

function Card({ date, time, minutes, services, children, status = 'DEFAULT' }: CardProps) {
	const statusColor = statusBase[status as keyof typeof statusBase].color;
	const statusText = statusBase[status as keyof typeof statusBase].text;

	return (
		<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] lg:min-w-[420px]">
			{(date) &&
				<h5	className="border-b-2 border-neutral-100 px-6 py-3 text-lg font-bold leading-tight text-font-primary grid grid-flow-col justify-between items-center gap-8">
					<div className="grid grid-flow-col justify-start gap-4 items-center">
						<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"></path>
						</svg>
						{date}
					</div>
					{status &&
						<p	className={'text-base font-bold leading-tight hidden lg:inline-flex ' + statusColor}>
							{statusText}
						</p>
					}
				</h5>
			}
			{(status || time  || services?.length) &&
				<div className="px-6 py-2">
					{status &&
						<p	className={'mb-2 text-base font-bold leading-tight inline-flex lg:hidden ' + statusColor}>
							{statusText}
						</p>
					}
					{time &&
						<p className="mb-2 text-sm text-font-primary flex">
							<svg className="h-4 w-4 mr-2 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="12" cy="12" r="10" />
								<polyline points="12 6 12 12 16 14" />
							</svg>
							<span className='leading-tight mr-2'>{time}</span>
							<svg className="h-4 w-4 text-black mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z"/>
								<line x1="5" y1="12" x2="19" y2="12" />
							</svg>
							{minutes} min
						</p>
					}
					{services?.length &&
						<p className="mb-2 text-xs font-semibold text-font-primary">
							Services:
						</p>
					}
					{services?.map((service: string, index: number) => 
						<p className="text-sm text-font-primary" key={index}>
							• {service}
						</p>)
					}
				</div>
			}
			{children}
		</div>
	);
}

interface CardProps {
	date?: string,
	time?: string,
	minutes?: string,
	services?: Array<string>,
	children?: React.ReactNode,
	status?: StatusTypes,
}

export default Card;
