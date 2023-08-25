import { serialize } from "cookie";
import { COOKIE_NAME } from "_constants";
import { NextResponse, NextRequest } from "next/server";

const handler = async (request: NextRequest) => {
  const serialized = serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: -1,
    path: '/'
  })
  return new NextResponse('Logged out',{
    status: 200,
    headers: {
      'Set-Cookie': serialized,
    },
  });
};

export { handler as POST };
