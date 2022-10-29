import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Page, Text, Button } from '@vercel/examples-ui'
import { useSite } from '@hooks/useSite';
import { SITES } from '@lib/site';

export default function Custom404() {
  const site = useSite();


  return (
    <Page>
      <Head>
        <title>Not Found</title>
        <meta
          name="description"
          content="Vercel example how to use multi-site custom not found"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col gap-6">
        <Text variant="h1">404 - {site?.toUpperCase() ?? ''} Not Found</Text>
        <Text>You can use a query parameter to view one of the avilable sites:</Text>

        <Text className="text-lg mb-4">
          <Link as='/' href='/chene?site=chene'>Chene</Link>
        </Text>
        <Text className="text-lg mb-4">
          <Link href='/?site=sapin'>Sapin</Link>
        </Text>

        <Text className="mb-4">
        Or you can use the buttons below to navigate to a different site
        the page:
      </Text>
      {SITES.map((site) => (
        <Button
          Component={Link}
          href={`http://${site}.localhost:3000`}
          key={site}
          style={{ marginRight: '0.625rem' }}
          variant="secondary"
        >
          Site {site.toUpperCase()}
        </Button>
      ))}
      <Button
        Component={Link}
        href={`http://localhost:3000`}
        variant="black"
      >
        Remove site
      </Button>

      </section>
    </Page>
  );
}
