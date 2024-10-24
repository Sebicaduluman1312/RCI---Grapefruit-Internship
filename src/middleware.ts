import { NextResponse, NextRequest } from "next/server";
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {

    const token = await getToken({ req, secret }); /// extragem token-ul
    const protectedRoutes = ['/about', '/contact'];

    if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
        if (!token) { /// daca tokenul nu e, nu e autentificat => ca redirectam
            const url = req.nextUrl.clone();
            url.pathname = '/auth/login';
            url.searchParams.set('callbackUrl', req.nextUrl.pathname);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();

}