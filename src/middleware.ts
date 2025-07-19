import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('acc_token')?.value
    const { pathname } = request.nextUrl

    // Rutas que requieren autenticación
    const protectedRoutes = ['/dashboard']

    // Rutas que solo pueden acceder usuarios no autenticados
    const authRoutes = ['/login', '/register']

    // Si el usuario está autenticado y trata de acceder a login/register
    if (token && authRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // Si el usuario no está autenticado y trata de acceder a rutas protegidas
    if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}