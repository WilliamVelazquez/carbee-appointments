import useFetch from "@/helpers/client/useFetch";

function useAvailabilityService(): AvailabilityServiceProps {
	const fetch = useFetch();
	return {
		getAvailability: async (date: string) => {
			try {
				return await fetch.get('api/availability/' + date); //+`?size=${date}`
			} catch (error: any) {
				console.log('ERROR ----->', error);
			}
		},
	}
};

interface AvailabilityServiceProps {
	getAvailability: (date: string) => Promise<[]>,
}

export default useAvailabilityService;
