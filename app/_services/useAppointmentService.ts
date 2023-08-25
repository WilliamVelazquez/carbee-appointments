import useFetch from "@/helpers/client/useFetch";
import { AppointmentsProps } from "@/helpers/types";

function useAppointmentService(): AppointmentServiceProps {
	const fetch = useFetch();
	return {
		getAppointments: async ({size, cursor, type}: {size: number, cursor: string, type: string}) => {
			try {
				const url = `api/appointments/?size=${size}${type ? `&${type}=` : ''}${cursor ? `${cursor}` : ''}`;
				return await fetch.get(url);
			} catch (error: any) {
				console.log('ERROR ----->', error);
			}
		},
	}
};

interface AppointmentServiceProps {
	getAppointments: ({size, cursor, type}:{size: number, cursor: string, type: string}) => Promise<AppointmentsProps>,
}

export default useAppointmentService;
