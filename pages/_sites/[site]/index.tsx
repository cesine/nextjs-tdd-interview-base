import type { NextApiRequest } from 'next'
import Head from 'next/head'
import { Layout, Text, Page, Link } from '@vercel/examples-ui'

type Props = {
  host: string;
};

function Home({ host }: Props) {
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
          This example shows to use a _middleware to rewrite paths so that the user doesnt now the full path to a given brand.

          Delete the pages/_middleware.ts file to be able to view the original page directory structure.
        </Text>

        <Link href={`http://chene.${host}`}>Chêne</Link>
        <Link href={`http://sapin.${host}`}>Sapin</Link>
        <Link href={`http://palmier.${host}`}>Palmier</Link>

      </section>

      <hr className="border-t border-accents-2 my-6" />
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

