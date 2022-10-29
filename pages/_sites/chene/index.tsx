import Link from 'next/link'
import {  Page, Text } from '@vercel/examples-ui'
import { useSite } from '@hooks/useSite';
import { Skeleton } from '@mui/material';
import { useProducts } from '@hooks/useProducts';

type Props = {
  site: string;
  color: string;
};

export default function Home({ site, color }: Props) {
  const { data: { products } = { products: []}, error } = useProducts();
  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color }}>
        Home page
      </Text>
      <Text className="text-lg mb-4">
        <Link href='/about'>About</Link> us
      </Text>
      <Text className="text-lg mb-4">
        Welcome to {site ? <b>{site.toUpperCase()}</b> : <Skeleton variant="text" width="20"/>}&nbsp;
        <span data-automation="products">
          {error ? error.message : products.map(({name}) => name).join(', ')}
        </span>
      </Text>
    </Page>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      site: 'chene',
      product: 'flooring',
      color: '#BB8141',
    }
  }
}
