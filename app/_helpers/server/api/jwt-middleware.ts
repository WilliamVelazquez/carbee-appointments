import { NextRequest, NextResponse } from 'next/server';

async function jwtMiddleware(req: NextRequest) {
	const isPublic = isPublicPath(req);
	if (isPublic) {
		return;
	}

	const token = req.cookies.get('token')?.value;
	req.headers.set('Authorization', `Bearer ${token}`);

	return NextResponse.next({
    request: { headers: req.headers }
  });
}

function isPublicPath(req: NextRequest) {
	const publicPaths = [
		'POST:/api/auth',
		'POST:/api/token',
		'POST:/api/login',
		'POST:/api/logout',
	];
	return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`);
}

export default jwtMiddleware;
