// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // التحقق من أن المسار هو الصفحة الرئيسية
  if (request.nextUrl.pathname === '/') {
    // إعادة توجيه إلى splash.html
    return NextResponse.redirect(new URL('/splash.html', request.url));
  }
  
  return NextResponse.next();
}

// تحديد المسارات التي يعمل عليها middleware
export const config = {
  matcher: '/',
};