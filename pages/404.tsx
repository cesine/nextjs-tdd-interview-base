import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Layout, Link, Page, Text, Button } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';
import { BRANDS } from '@lib/brand';

export default function Custom404() {
  const brand = useBrand();

  return (
    <Page>
      <Head>
        <title>Not Found</title>
        <meta
          name="description"
          content="Vercel example how to use multi-brand custom not found"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col gap-6">
        <Text variant="h1">404 - {brand?.toUpperCase() ?? ''} Not Found</Text>
        <Text>You can use a query parameter to view one of the avilable brands:</Text>

        <Text className="text-lg mb-4">
          <Link as='/' href='/chene?brand=chene'>Chene</Link>
        </Text>
        <Text className="text-lg mb-4">
          <Link href='/?brand=sapin'>Sapin</Link>
        </Text>

        <Text className="mb-4">
        Or you can use the buttons below to change your assigned brand cookie and refresh
        the page:
      </Text>
      {BRANDS.map((brand) => (
        <Button
          Component={Link}
          href={`http://${brand}.localhost:3000`}
          key={brand}
          style={{ marginRight: '0.625rem' }}
          variant="secondary"
        >
          Brand {brand.toUpperCase()}
        </Button>
      ))}
      <Button
        Component={Link}
        href={`http://localhost:3000`}
        variant="black"
      >
        Remove brand
      </Button>

      </section>
    </Page>
  );
}


Custom404.Layout = Layout;
