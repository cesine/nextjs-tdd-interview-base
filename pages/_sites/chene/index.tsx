import Link from 'next/link'
import Typography from '@mui/material/Typography';
import {  Page } from '@vercel/examples-ui'
import { useSite } from '@hooks/useSite';
import Skeleton from '@mui/material/Skeleton';
import { useProducts } from '@hooks/useProducts';

type Props = {
  site: string;
  color: string;
};

export default function Home({ site, color }: Props) {
  const { data: { products } = {}, error } = useProducts();
  return (
    <Page>
      <Typography variant="h2" className="mb-6" style={{ color }}>
        Home page
      </Typography>
      <Typography className="text-lg mb-4">
        <Link href='/about'>About</Link> us
      </Typography>
      <Typography className="text-lg mb-4">
        Welcome to {site ? <b>{site.toUpperCase()}</b> : <Skeleton variant="text" width="20" />}&nbsp;
        {products ? <span data-automation="products">
          {error ? error.message : products.map(({name}) => name).join(', ')}
        </span> : <Skeleton variant="text" width="30" />}
      </Typography>
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
