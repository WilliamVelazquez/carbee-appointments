"use client";

import { useState } from "react";

import Button from "@/components/Button";
import useUserService from "@/services/useUserService";

function Nav() {
	const [loggingOut, setLoggingOut] = useState<boolean>(false);
	const userService = useUserService();

	async function logout() {
		setLoggingOut(true);
		await userService.logout();
	}

	return (
		<nav className="text-white flex bg-primary border-b-2 border-secondary p-4 justify-between max-h-[74px]">
			<a href="/" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
				<img className="h-6 sm:h-8" src="https://global-uploads.webflow.com/5fc52995267f1caab0304add/64d15307091f7c3fea26ac7e_WF_logo_Curbee.svg" alt="Carbee logo" />
			</a>
			<div className="navbar-nav">
				<Button
					onClick={logout}
					disabled={loggingOut}
					className={"text-white bg-secondary focus:ring-2 focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center active:scale-95"}
				>
					<span>Logout</span>
					{loggingOut && <svg aria-hidden="true" role="status" className="inline w-4 h-4 ml-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
						</svg>
					}
				</Button>
			</div>
		</nav>
	);
}

export default Nav;
