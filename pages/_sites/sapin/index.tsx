import Link from 'next/link'
import type { NextApiRequest } from 'next'
import Typography from '@mui/material/Typography';
import { Page } from '@vercel/examples-ui'
import { getSite } from '@lib/site';

type Product = {
  id: string;
  name: string;
  site: string;
};
type Props = {
  site: string;
  color: string;
  products: Product[];
};

export default function Home({ site, color, products }: Props) {
  return (
    <Page>
      <Typography variant="h1" className="mb-6" style={{ color }}>
        {site.toUpperCase()}
      </Typography>
      <Typography className="text-lg mb-4">
        You&apos;re currently visiting the <b>site {site.toUpperCase()}</b> <span data-automation="products">{products.map(({name}) => name).join(', ')}</span> website.
      </Typography>
      <Typography className="mb-4">
        You can use the buttons below to change your assigned site and refresh
        the page:
      </Typography>
      <Typography className="text-bold mb-4">
        <Link href="/about">About</Link>
      </Typography>
    </Page>
  )
}

export async function getServerSideProps({ req, res }: { req: NextApiRequest }) {
  const site = 'sapin';
  let products = [];
  try {
    const host = `http://${req.headers.host}` || '';
    console.log('host', host)
    // const res = await fetch(`${host}/api/products`, {
    // assume we should talk to ourself on server side
    const res = await fetch(`http://localhost:3000/api/products?${new URLSearchParams({
      site
    })}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    const data = await res.json()
    products = data.products;
  } catch (e: any) {
    if (e.message === 'cancelled') {
      // Cancelled by browser
      console.log('Request Cancelled by the Browser', e)
    } else {
      console.error('Network Error, CORS or timeout.', e)
    }
    products = [e.status];
  }
  res.setHeader('Cache-Control', 'max-age=900');

  return {
    props: {
      color: '#567030',
      description: 'We offer the finest christmas trees delivered to you!',
      products,
      site,
      title: 'Buy Sapin Christmas Trees',
    }
  }
}
