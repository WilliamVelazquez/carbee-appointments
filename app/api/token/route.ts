import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { COOKIE_NAME } from "@/constants/index";

const handler = async () => {
  const cookieStore = cookies();
  const isAuthenticated = !!cookieStore.get(COOKIE_NAME)?.value;
  if(!isAuthenticated) {
    return NextResponse.json({
      message: 'Unauthorized',
    }, {status: 401});
  }

  return NextResponse.json({
    message: 'Authenticated',
  }, {status: 200});
};

export { handler as GET };
