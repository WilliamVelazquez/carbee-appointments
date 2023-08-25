import type { NextRequest } from 'next/server';
import jwtMiddleware from '@/helpers/server/api/jwt-middleware';

 
export async function middleware(request: NextRequest) {
  return await jwtMiddleware(request);
}
 
export const config = {
  matcher: '/api/:path*',
}
