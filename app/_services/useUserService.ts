import { useRouter } from "next/navigation";

import useFetch from "@/helpers/client/useFetch";

function useUserService(): UserServiceProps {
	const fetch = useFetch();
	const router = useRouter();

	return {
		login: async (username, password) => {
			try {
				const currentToken = await fetch.post('api/auth/', { username, password });
				await fetch.post('api/login/', currentToken);
				router.push('/dashboard');
			} catch (error: any) {
				console.log('ERROR ----->', error);
			}
		},
		logout: async () => {
			await fetch.post('/api/logout');
			router.push('/login');
		},
	}
};

interface UserServiceProps {
	login: (username: string, password: string) => Promise<void>,
	logout: () => Promise<void>
}

export default useUserService;
