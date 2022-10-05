import Head from 'next/head'
import { Layout, Text, Page, Link } from '@vercel/examples-ui'

function Home() {
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

        <Link href='/chene'>Chêne</Link>
        <Link href='/sapin'>Sapin</Link>
        <Link href='/palmier'>Palmier</Link>

      </section>

      <hr className="border-t border-accents-2 my-6" />
    </Page>
  )
}

Home.Layout = Layout

export default Home
