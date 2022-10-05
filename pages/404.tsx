import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Layout, Link, Page, Text, Button } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';
import { BRANDS } from '@lib/brand';
import { COOKIE_NAME } from '@lib/constants';

export default function Custom404() {
  const router = useRouter()

  const brand = useBrand();
  const setBrand = (brand: string) => () => {
    Cookies.set(COOKIE_NAME, brand)
    router.reload()
  }
  const removeBrand = () => {
    Cookies.remove(COOKIE_NAME)
    router.reload()
  }
    
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
        <Text variant="h1">404 - {brand.toUpperCase()} Not Found</Text>
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
          key={brand}
          variant="secondary"
          onClick={setBrand(brand)}
          style={{ marginRight: '0.625rem' }}
        >
          Brand {brand.toUpperCase()}
        </Button>
      ))}
      <Button variant="black" onClick={removeBrand}>
        Remove brand
      </Button>

      </section>
    </Page>
  );
}


Custom404.Layout = Layout;
