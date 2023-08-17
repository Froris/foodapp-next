import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  return NextResponse.rewrite(new URL('/menu', req.url));
}

export const config = {
  matcher: '/',
};
