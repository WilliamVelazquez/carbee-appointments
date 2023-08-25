const status = {
	'SCHEDULED': {
		text: 'Scheduled',
		color: 'text-primary',  
	},
	'IN_PROGRESS': {
		text: 'In progress',
		color: 'text-warn',  
	},
	'COMPLETE': {
		text: 'Completed',
		color: 'text-secondary',  
	},
	'CANCELLED': {
		text: 'Cancelled',
		color: 'text-danger',  
	},
	'PAID': {
		text: 'Paid',
		color: 'text-success',  
	},
	'DEFAULT': {
		text: 'No status',
		color: 'text-font-primary',  
	},
}

const getFullDate = (stringDate: string) => {
	return new Date(stringDate).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"long", day:"numeric"});
}

const getMmDdYyyy = (stringDate: string) => {
	return new Date(stringDate).toLocaleDateString();
}

const getDdMmYyyy = (stringDate: string) => {
	return new Date(stringDate).toLocaleDateString('es-MX');
}

const getYyyyMmDd = (stringDate: string) => {
	return new Date(stringDate).toISOString().split('T')[0];
}

const getHourAndMinutes = (stringDate: string) => {
	const time = new Date(stringDate).toLocaleTimeString();
	const lastIndex = time.lastIndexOf(":");
	return time.slice(0, lastIndex);
}
const getTomorrow = () => {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow;
}

export {
	status,
	getTomorrow,
	getFullDate,
	getMmDdYyyy,
	getDdMmYyyy,
	getYyyyMmDd,
	getHourAndMinutes,
}
