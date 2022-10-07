import type { NextApiRequest } from 'next'
import Head from 'next/head'
import { Layout, Text, Page, Link } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';
import { useProducts } from '@hooks/useProducts';

type Props = {
  host: string;
};

function Home({ host }: Props) {
  const brand = useBrand();
  const { data: { products } = { products: []}, error } = useProducts();

  return (
    <Page>
      <Head>
        <title>multi-brand - Vercel Example</title>
        <meta
          name="description"
          content="Vercel example how to use multi-brand"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col gap-6">
        <Text variant="h1">multi-brand usage example</Text>
        <Text>
          This example shows to use a middleware to rewrite paths so that the user doesnt now the full path to a given brand.

          Delete the middleware.ts file to be able to view the original page directory structure.
        </Text>

        <Text variant="h2">Current brand: {brand}</Text>
        {products.length
          ? <ul data-automation="products">
            {products.map(({name}) => (<li key={name}>{name}</li>))}
          </ul>
        : null }

        <Text variant="h2">Visit our brands</Text>

        <footer className="border-t border-accents-2 my-6" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Link href={`http://chene.${host}`}>Chêne</Link>
          <Link href={`http://sapin.${host}`}>Sapin</Link>
          <Link href={`http://palmier.${host}`}>Palmier</Link>
        </footer>
      </section>

      <hr className="border-t border-accents-2 my-6"/>
    </Page>
  )
}

Home.Layout = Layout

export default Home

export async function getServerSideProps({ req } : { req: NextApiRequest }) {
  const { host } = req.headers;

  return {
    props: {
      host,
    }
  }
}

