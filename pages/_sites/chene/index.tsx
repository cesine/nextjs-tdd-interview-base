import { Layout, Link, Page, Text } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';
import { Skeleton } from '@mui/material';
import { useProducts } from '@hooks/useProducts';

type Props = {
  brand: string;
  color: string;
};

export default function Home({ brand, color }: Props) {
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
        Welcome to {brand ? <b>{brand.toUpperCase()}</b> : <Skeleton variant="text" width="20"/>}&nbsp;
        <span data-automation="products">
          {error ? error.message : products.map(({name}) => name).join(', ')}
        </span>
      </Text>
    </Page>
  )
}

Home.Layout = Layout;

export async function getServerSideProps() {
  return {
    props: {
      brand: 'chene',
      product: 'flooring',
      color: '#BB8141',
    }
  }
}
