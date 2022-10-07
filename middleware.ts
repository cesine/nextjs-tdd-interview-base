import { NextRequest, NextResponse } from 'next/server';
import { BRANDS, getBrand, isValidBrand } from '@lib/brand';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)',
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.ferme.ca, demo.localhost:3000)
  const hostname = req.headers.get('host') || 'demo.ferme.ca';

  // Only for demo purposes - remove this if you want to use your root domain as the landing page
  if (hostname === 'ferme.ca' || hostname === 'platforms.vercel.app') {
    return NextResponse.redirect('https://demo.ferme.ca');
  }

  /*  You have to replace '.ferme.ca' with your own domain if you deploy this example under your domain.
      You can also use wildcard subdomains on .vercel.app links that are associated with your Vercel team slug
      in this case, our team slug is 'platformize', thus *.platformize.vercel.app works. Do note that you'll
      still need to add '*.platformize.vercel.app' as a wildcard domain on your Vercel dashboard. */
  const currentHost = getBrand(hostname);
  if (
    url.pathname === '/login' &&
    (req.cookies.get('next-auth.session-token') ||
      req.cookies.get('__Secure-next-auth.session-token'))
  ) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  url.pathname = `/_sites/${currentHost}${url.pathname}`;
  console.log('rewriting the url ', url.pathname)
  return NextResponse.rewrite(url);
}
