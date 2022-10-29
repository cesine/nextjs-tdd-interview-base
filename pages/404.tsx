import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import { Page, Button } from '@vercel/examples-ui'
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
        <Typography variant="h1">404 - {site?.toUpperCase() ?? ''} Not Found</Typography>
        <Typography>You can use a query parameter to view one of the avilable sites:</Typography>

        <Typography className="text-lg mb-4">
          <Link as='/' href='/chene?site=chene'>Chene</Link>
        </Typography>
        <Typography className="text-lg mb-4">
          <Link href='/?site=sapin'>Sapin</Link>
        </Typography>

        <Typography className="mb-4">
        Or you can use the buttons below to navigate to a different site
        the page:
      </Typography>
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
