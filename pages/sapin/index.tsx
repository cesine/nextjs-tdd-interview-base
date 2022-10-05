import type { NextApiRequest } from 'next'
import { Layout, Link, Page, Text } from '@vercel/examples-ui'
// import { useBrand } from '@hooks/useBrand';

type Product = {
  id: string;
  name: string;
  brand: string;
};
type Props = {
  brand: string;
  color: string;
  products: Product[];
};

export default function Home({ brand, color, products }: Props) {
  // const brand = useBrand();

  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color }}>
        Home page
      </Text>
      <Text className="text-lg mb-4">
        You&apos;re currently visiting the <b>brand {brand.toUpperCase()}</b> {products.map(({name}) => name).join(', ')} website.
      </Text>
      <Text className="mb-4">
        You can use the buttons below to change your assigned brand and refresh
        the page:
      </Text>
      <Text className="text-bold mb-4">
        <Link href="/about">About</Link>
      </Text>
    </Page>
  )
}

Home.Layout = Layout

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  let products = [];
  const { brand = '' } = req.cookies;

  try {
    const host = `http://${req.headers.host}` || '';
    console.log('host', host)
    const res = await fetch(`${host}/api/products`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        cookie: `brand=${brand}`,
      }
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


  return {
    props: {
      brand,
      products,
      color: '#567030',
    }
  }
}
