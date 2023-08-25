"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Nav from "@/components/Nav";
import useFetch from "@/helpers/client/useFetch";

async function verifyIsAuthenticated() {
	const fetch = useFetch();
  try{
    const data = await fetch.get('/api/token');
    return {
      data,
      error: null
    }
  } catch(error){
		console.log('Secure Error->', error);
		return {
      data: null,
      error
    }
  }
}

function Layout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const [userAuthorized, setUserAuthorized] = useState<boolean>(false);
	useEffect(()=>{
		(async () => {
			const { data, error } = await verifyIsAuthenticated();
			if(error) {
				router.push('/login');
				return;
			}
			setUserAuthorized(true);
		})();
	}, []);

	if(!userAuthorized) {
		return <main className="flex min-h-screen flex-col items-center justify-center">
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
				<a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
					<img className="h-8" src="https://app.curbee.com/public/images/logo-primary.svg" alt="Carbee logo" />
				</a>
			</div>
		</section>
	</main>
	}
	return (
		<div className="min-h-screen grid gap-4">
			<Nav />
			{children}
		</div>
	);
}

export default Layout;
