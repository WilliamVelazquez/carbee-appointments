import { serialize } from "cookie";
import { NextResponse, NextRequest } from "next/server";
import { COOKIE_NAME, TOKEN_MAX_AGE } from "@/constants/index";

const handler = async (request: NextRequest) => {
  const data = await request.json();
  const serialized = serialize(COOKIE_NAME, data?.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: TOKEN_MAX_AGE,
    path: '/'
  })
  return new NextResponse('Authenticated',{
    status: 200,
    headers: {
      'Set-Cookie': serialized,
    },
  });
};

export { handler as POST };
