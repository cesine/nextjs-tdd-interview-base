import { NextRequest, NextResponse } from 'next/server';
import { BRANDS, isValidBrand } from '@lib/brand';

import { COOKIE_NAME } from '@lib/constants';
import { NextURL } from 'next/dist/server/web/next-url';

export function getBrand(req: NextRequest) {
  let override = req.nextUrl.searchParams.get(COOKIE_NAME) || req.cookies.get(COOKIE_NAME);

  const host = req.headers.get('host') || '';
  const brand = BRANDS.find((b) => host.includes(b));

  if (brand) {
    return brand;
  }

  if (isValidBrand(override)){
    return override;
  }

  // Default to a brand which is not found, and the 404 page can tell you where to look
  return 'sapin';
}


export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Dont rewite the path for api routes
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Get the brand cookie
  const brand = getBrand(req)
  console.log('detected brand', brand)
  const updatedUrl = new NextURL(req.nextUrl);
  updatedUrl.pathname = `/${brand}${pathname}`;
  // TODO this doesnt impact the query params (might have to use browser)
  updatedUrl.searchParams.delete('brand');
  const res = NextResponse.rewrite(updatedUrl)

  // Add the brand to cookies if it's not there or it doesnt match the desired brand
  if (!req.cookies.get(COOKIE_NAME) || req.cookies.get(COOKIE_NAME) !== brand) {
    res.cookies.set(COOKIE_NAME, brand)
  }

  return res;
}
